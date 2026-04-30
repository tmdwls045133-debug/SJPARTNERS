"use client";

import { useEffect, useState } from "react";
import { useRoleStore } from "@/lib/useRole";

interface Customer {
  id: number;
  company: string;
  contact: string;
  phone: string;
  consult_date: string;
  status: string;
  manager: string;
}

export default function CustomersPage() {
  const { role } = useRoleStore();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    try {
      const res = await fetch('/api/customers');
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="text-center py-8">로딩 중...</div>;
  }

  if (role !== "sales") {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center max-w-md">
          <div className="text-2xl mb-2">⛔</div>
          <h2 className="text-xl font-bold text-amber-900 mb-2">
            접근 권한 없음
          </h2>
          <p className="text-amber-800">
            고객 관리는 영업팀만 접근할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">고객 관리</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + 새 고객 추가
        </button>
      </div>

      {/* 고객 목록 테이블 */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                고객사명
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                담당자
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                연락처
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                상담일
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                상태
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                담당자
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                액션
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                  {customer.company}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {customer.contact}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {customer.phone}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {customer.consult_date}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.status === "소통중"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {customer.manager}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    {customer.status === "소통중" ? "계약완료" : "상세보기"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-slate-600">
        총 {customers.length}명의 고객
      </div>
    </div>
  );
}
