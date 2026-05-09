"use client";

import { useEffect, useState } from "react";
import { useRoleStore } from "@/lib/useRole";

interface Contract {
  id: number;
  company: string;
  contract_date: string;
  service: string;
  expected_amount: string;
}

export default function ContractsPage() {
  const { role } = useRoleStore();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const isSales = role === "sales";

  useEffect(() => {
    fetchContracts();
  }, []);

  async function fetchContracts() {
    try {
      const res = await fetch('/api/contracts');
      const data = await res.json();
      setContracts(data);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="text-center py-8">로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">계약 관리</h1>
        {isSales && (
          <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded">
            ✏️ 수정 권한 있음
          </div>
        )}
        {!isSales && (
          <div className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded">
            👁️ 읽기만 가능
          </div>
        )}
      </div>

      {/* 계약 목록 테이블 */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                고객사명
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                계약일
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                서비스 항목
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                예상 자금규모
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                액션
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                  {contract.company}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {contract.contract_date}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {contract.service}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-semibold">
                  {contract.expected_amount}원
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

      <div className="text-sm text-slate-600">
        총 {contracts.length}건의 계약
      </div>

      {/* 정보 박스 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          💡 팁: 고객 관리에서 "계약완료" 버튼을 클릭하면 자동으로 이 목록에
          추가됩니다. (자동화는 추후 구현)
        </p>
      </div>
    </div>
  );
}
