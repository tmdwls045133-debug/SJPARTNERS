"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type RoleTab = "sales" | "ops" | "ceo";

const roleTabs: { key: RoleTab; label: string; icon: string }[] = [
  { key: "sales", label: "영업팀", icon: "👤" },
  { key: "ops", label: "관리팀", icon: "👥" },
  { key: "ceo", label: "대표자", icon: "👑" },
];

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<RoleTab>("sales");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("아이디 또는 비밀번호가 올바르지 않습니다");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">SJPARTNERS</h1>
          <p className="text-slate-500 mt-2 text-sm">내부 전산 시스템</p>
        </div>

        {/* 역할 탭 */}
        <div className="flex gap-2 mb-6 bg-slate-100 rounded-xl p-1">
          {roleTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setError(""); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              아이디
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={
                activeTab === "sales" ? "sj-sales" :
                activeTab === "ops" ? "sj-coo" : "sj-ceo"
              }
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition mt-2"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <div className="mt-5 text-center text-xs text-slate-400">
          계정 문의는 대표자에게 연락하세요
        </div>

        <div className="mt-3 text-center">
          <Link href="/" className="text-xs text-blue-500 hover:text-blue-700 transition">
            ← 홈페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
