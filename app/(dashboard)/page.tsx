"use client";

import { useEffect, useState } from "react";
import { useRoleStore } from "@/lib/useRole";

interface Customer {
  id: number;
  company: string;
  contact: string;
  manager: string;
  status: string;
}

interface Contract {
  id: number;
}

interface FundingCase {
  id: number;
  status: string;
}

export default function Dashboard() {
  const { role } = useRoleStore();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [cases, setCases] = useState<FundingCase[]>([]);
  const [loading, setLoading] = useState(true);
  const isSales = role === "sales";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [customersRes, contractsRes, casesRes] = await Promise.all([
        fetch('/api/customers'),
        fetch('/api/contracts'),
        fetch('/api/funding'),
      ]);

      setCustomers(await customersRes.json());
      setContracts(await contractsRes.json());
      setCases(await casesRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="text-center py-8">로딩 중...</div>;
  }

  const inProgressCount = cases.filter(
    (f) => f.status !== "completed"
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">대시보드</h1>
        <div className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
          {isSales ? "👤 영업팀" : "👥 관리팀"}
        </div>
      </div>

      {/* 통계 카드 - 역할별 다른 통계 */}
      <div className="grid grid-cols-4 gap-4">
        {isSales ? (
          <>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 mb-2">✨ 총 고객 수</p>
              <p className="text-3xl font-bold text-blue-600">
                {customers.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <p className="text-sm text-green-700 mb-2">📝 소통중인 고객</p>
              <p className="text-3xl font-bold text-green-600">
                {customers.filter((c) => c.status === "sooting").length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-700 mb-2">✅ 계약 완료</p>
              <p className="text-3xl font-bold text-orange-600">
                {contracts.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-700 mb-2">📊 계약율</p>
              <p className="text-3xl font-bold text-purple-600">
                {customers.length > 0 ? Math.round(
                  (contracts.length / customers.length) * 100
                ) : 0}%
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 mb-2">📋 총 계약 건수</p>
              <p className="text-3xl font-bold text-blue-600">
                {contracts.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-700 mb-2">⏳ 진행 중</p>
              <p className="text-3xl font-bold text-yellow-600">
                {inProgressCount}
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <p className="text-sm text-red-700 mb-2">⚠️ 미접수</p>
              <p className="text-3xl font-bold text-red-600">
                {cases.filter((f) => f.status === "not_received").length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <p className="text-sm text-green-700 mb-2">🎉 완료율</p>
              <p className="text-3xl font-bold text-green-600">
                {cases.length > 0 ? Math.round(
                  (cases.filter(c => c.status === "completed").length / cases.length) * 100
                ) : 0}%
              </p>
            </div>
          </>
        )}
      </div>

      {/* 최근 계약 목록 */}
      <div className="bg-white p-6 rounded-lg border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">최근 계약</h2>
        <div className="text-sm text-slate-600">
          <p>총 {contracts.length}건의 계약이 진행 중입니다.</p>
          <p className="mt-2">상세 내용은 "계약 관리" 페이지에서 확인하세요.</p>
        </div>
      </div>

      {/* 활동 중인 고객 */}
      <div className="bg-white p-6 rounded-lg border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">활동 중인 고객</h2>
        <div className="space-y-2">
          {customers
            .filter((c) => c.status === "sooting")
            .slice(0, 5)
            .map((customer) => (
              <div
                key={customer.id}
                className="flex items-center justify-between p-3 bg-slate-50 rounded"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {customer.company}
                  </p>
                  <p className="text-xs text-slate-500">
                    담당자: {customer.manager}
                  </p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded">
                  소통중
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
