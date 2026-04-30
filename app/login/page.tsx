"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/useAuth";
import { useRoleStore } from "@/lib/useRole";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading } = useAuthStore();
  const { setRole } = useRoleStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRoleLocal] = useState<"sales" | "management">("sales");
  const [error, setError] = useState("");

  // 회원가입 모달 상태
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registering, setRegistering] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      setRole(role);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "로그인 실패");
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess(false);

    if (registerPassword !== registerPasswordConfirm) {
      setRegisterError("비밀번호가 일치하지 않습니다");
      return;
    }

    if (registerPassword.length < 6) {
      setRegisterError("비밀번호는 최소 6자 이상이어야 합니다");
      return;
    }

    setRegistering(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
          name: registerName,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "회원가입 실패");
      }

      setRegisterSuccess(true);
      setTimeout(() => {
        setShowRegisterModal(false);
        setRegisterEmail("");
        setRegisterPassword("");
        setRegisterPasswordConfirm("");
        setRegisterName("");
      }, 2000);
    } catch (err: any) {
      setRegisterError(err.message);
    } finally {
      setRegistering(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            SJPARTNERS
          </h1>
          <p className="text-slate-600 mt-2">내부 전산 시스템</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@company.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              팀 선택
            </label>
            <select
              value={role}
              onChange={(e) =>
                setRoleLocal(e.target.value as "sales" | "management")
              }
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            >
              <option value="sales">👤 영업팀</option>
              <option value="management">👥 관리팀</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            로그인
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600">
            계정이 없으신가요?{" "}
            <button
              onClick={() => setShowRegisterModal(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              회원가입
            </button>
          </p>
        </div>
      </div>

      {/* 회원가입 모달 */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">회원가입</h2>
              <button
                onClick={() => setShowRegisterModal(false)}
                className="text-slate-500 hover:text-slate-700 text-2xl"
              >
                ×
              </button>
            </div>

            {registerSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
                <div className="text-2xl mb-2">✅</div>
                <p className="text-green-800 font-semibold mb-2">가입 신청이 완료되었습니다!</p>
                <p className="text-green-700 text-sm">
                  대표자의 승인 후 접속이 가능합니다.
                </p>
              </div>
            )}

            {registerError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-sm text-red-700">
                {registerError}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  placeholder="김철수"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  placeholder="example@company.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  value={registerPasswordConfirm}
                  onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={registering || registerSuccess}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {registering ? "가입 중..." : "가입하기"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
