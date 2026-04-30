"use client";

import { useEffect, useState } from "react";
import { useRoleStore } from "@/lib/useRole";

interface FundingCase {
  id: number;
  company: string;
  status: string;
  manager: string;
  due_date: string;
  documents_submitted: number;
  documents_total: number;
}

export default function FundingPage() {
  const { role } = useRoleStore();
  const [cases, setCases] = useState<FundingCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFundingCases();
  }, []);

  async function fetchFundingCases() {
    try {
      const res = await fetch('/api/funding');
      const data = await res.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching funding cases:', error);
    } finally {
      setLoading(false);
    }
  }

  if (role !== "management") {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center max-w-md">
          <div className="text-2xl mb-2">⛔</div>
          <h2 className="text-xl font-bold text-amber-900 mb-2">
            접근 권한 없음
          </h2>
          <p className="text-amber-800">
            자금신청 진행현황은 관리팀만 접근할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-8">로딩 중...</div>;
  }

  const statusColors: Record<string, string> = {
    미접수: "bg-gray-100 text-gray-700",
    서류취합중: "bg-yellow-100 text-yellow-700",
    신청: "bg-blue-100 text-blue-700",
    진행중: "bg-purple-100 text-purple-700",
    완료: "bg-green-100 text-green-700",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">자금신청 진행현황</h1>

      {/* 칸반 보드 (간단 버전 - 1단계) */}
      <div className="grid grid-cols-5 gap-4">
        {["미접수", "서류취합중", "신청", "진행중", "완료"].map((status) => (
          <div
            key={status}
            className="bg-slate-100 rounded-lg p-4 min-h-96"
          >
            <h3 className="font-bold text-slate-900 mb-4">
              {status}
              <span className="ml-2 text-sm text-slate-600">
                ({cases.filter((f) => f.status === status).length})
              </span>
            </h3>

            <div className="space-y-3">
              {cases
                .filter((f) => f.status === status)
                .map((funding) => (
                  <div
                    key={funding.id}
                    className="bg-white rounded-lg p-3 border border-slate-200 cursor-move hover:shadow-md transition"
                  >
                    <p className="font-semibold text-sm text-slate-900">
                      {funding.company}
                    </p>
                    <div className="text-xs text-slate-600 mt-2 space-y-1">
                      <p>담당: {funding.manager}</p>
                      <p>마감: {funding.due_date}</p>
                      <p>서류: {funding.documents_submitted}/{funding.documents_total}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* 상세 테이블 */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">상세 목록</h2>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                고객사명
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                상태
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                담당자
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                마감일
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                서류 진행률
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                액션
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {cases.map((funding) => (
              <tr key={funding.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                  {funding.company}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[funding.status] || statusColors["미접수"]
                    }`}
                  >
                    {funding.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {funding.manager}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {funding.due_date}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (funding.documents_submitted /
                              funding.documents_total) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-slate-600">
                      {funding.documents_submitted}/{funding.documents_total}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
