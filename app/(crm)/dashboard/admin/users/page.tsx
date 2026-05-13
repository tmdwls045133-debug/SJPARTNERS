"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface User {
  id: string;
  username: string;
  name: string;
  role: string;
  team_id: string | null;
  created_at: string;
}

export default function UsersManagementPage() {
  const { data: session } = useSession();
  const role = (session?.user as any)?.role;

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    role: "sales",
    team_id: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("/api/admin/users");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUsers(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setCreating(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "생성 실패");
      setUsers([data, ...users]);
      setShowForm(false);
      setForm({ username: "", password: "", name: "", role: "sales", team_id: "" });
    } catch (err: any) {
      setFormError(err.message);
    } finally {
      setCreating(false);
    }
  }

  if (role !== "ceo" && role !== "admin") {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center max-w-md">
          <div className="text-2xl mb-2">⛔</div>
          <h2 className="text-xl font-bold text-amber-900 mb-2">접근 권한 없음</h2>
          <p className="text-amber-800">대표자만 직원 계정을 관리할 수 있습니다.</p>
        </div>
      </div>
    );
  }

  if (loading) return <div className="text-center py-8 text-slate-600">로딩 중...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">직원 계정 관리</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          + 새 계정 생성
        </button>
      </div>

      {/* 계정 생성 폼 */}
      {showForm && (
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">새 직원 계정</h2>
          {formError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-sm text-red-700">
              {formError}
            </div>
          )}
          <form onSubmit={handleCreate} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">이름</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="홍길동"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">아이디</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="hong123"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">비밀번호</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="초기 비밀번호"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">역할</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="sales">영업팀</option>
                <option value="ops">관리팀</option>
                <option value="ceo">대표자</option>
              </select>
            </div>
            <div className="col-span-2 flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={creating}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
              >
                {creating ? "생성 중..." : "계정 생성"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 직원 목록 */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">이름</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">아이디</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">역할</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">생성일</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{user.username}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === "ceo"
                      ? "bg-purple-100 text-purple-700"
                      : user.role === "ops"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {user.role === "ceo" ? "대표자" : user.role === "ops" ? "관리팀" : "영업팀"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {new Date(user.created_at).toLocaleDateString("ko-KR")}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                  등록된 직원이 없습니다
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
