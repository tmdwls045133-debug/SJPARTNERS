"use client";

import { useEffect, useState } from "react";
import { useRoleStore } from "@/lib/useRole";

interface User {
  user_id: string;
  email: string;
  name: string;
  role: "sales" | "management" | "admin";
  status: "pending" | "active" | "inactive";
  created_at: string;
}

export default function UsersManagementPage() {
  const { role } = useRoleStore();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("사용자 목록 조회 실패");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  async function updateUserRole(userId: string, newRole: string) {
    setUpdating(userId);
    try {
      const res = await fetch(`/api/users/${userId}/role`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      if (!res.ok) throw new Error("역할 변경 실패");

      // 로컬 상태 업데이트
      setUsers(
        users.map((u) =>
          u.user_id === userId ? { ...u, role: newRole as any } : u
        )
      );
    } catch (error) {
      console.error("Error updating role:", error);
      alert("역할 변경에 실패했습니다");
    } finally {
      setUpdating(null);
    }
  }

  async function approveUser(userId: string, role: string) {
    setUpdating(userId);
    try {
      const res = await fetch(`/api/users/${userId}/approve`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      if (!res.ok) throw new Error("승인 실패");

      // 로컬 상태 업데이트
      setUsers(
        users.map((u) =>
          u.user_id === userId ? { ...u, status: "active", role: role as any } : u
        )
      );
    } catch (error) {
      console.error("Error approving user:", error);
      alert("사용자 승인에 실패했습니다");
    } finally {
      setUpdating(null);
    }
  }

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center max-w-md">
          <div className="text-2xl mb-2">⛔</div>
          <h2 className="text-xl font-bold text-amber-900 mb-2">
            접근 권한 없음
          </h2>
          <p className="text-amber-800">
            관리자만 사용자를 관리할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-8">로딩 중...</div>;
  }

  const pendingUsers = users.filter((u) => u.status === "pending");
  const activeUsers = users.filter((u) => u.status === "active");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">사용자 관리</h1>

      {/* 승인 대기 섹션 */}
      {pendingUsers.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            🔔 승인 대기 ({pendingUsers.length})
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-yellow-100 border-b border-yellow-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                    이름
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                    이메일
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                    할당 역할
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                    가입일
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                    액션
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-200">
                {pendingUsers.map((user) => (
                  <tr key={user.user_id} className="hover:bg-yellow-100">
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <select
                        defaultValue="sales"
                        onChange={(e) => {
                          (e.target as any).dataset.role = e.target.value;
                        }}
                        className="px-3 py-1 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="sales">영업팀</option>
                        <option value="management">관리팀</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {new Date(user.created_at).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={(e) => {
                          const select = (e.target as HTMLElement).parentElement?.querySelector('select') as HTMLSelectElement;
                          approveUser(user.user_id, select?.value || "sales");
                        }}
                        disabled={updating === user.user_id}
                        className="bg-green-600 text-white px-3 py-1 rounded font-medium hover:bg-green-700 disabled:opacity-50"
                      >
                        {updating === user.user_id ? "승인 중..." : "승인"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 승인된 사용자 섹션 */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          ✅ 승인된 사용자 ({activeUsers.length})
        </h2>
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  이름
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  이메일
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  역할
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  가입일
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  액션
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {activeUsers.map((user) => (
                <tr key={user.user_id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <select
                      value={user.role}
                      onChange={(e) => updateUserRole(user.user_id, e.target.value)}
                      disabled={updating === user.user_id}
                      className="px-3 py-1 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="sales">영업팀</option>
                      <option value="management">관리팀</option>
                      <option value="admin">관리자</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(user.created_at).toLocaleDateString("ko-KR")}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      disabled={updating === user.user_id}
                      className="text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50"
                    >
                      {updating === user.user_id ? "저장 중..." : "저장"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-sm text-slate-600">
        총 {users.length}명 (대기: {pendingUsers.length}명, 승인됨: {activeUsers.length}명)
      </div>
    </div>
  );
}
