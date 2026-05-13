import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// GET: 전체 직원 목록 조회
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ceo") {
    return NextResponse.json({ error: "권한 없음" }, { status: 403 });
  }

  const { data, error } = await supabase
    .from("users")
    .select("id, username, name, role, team_id, created_at")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST: 새 직원 계정 생성 (대표자만)
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ceo") {
    return NextResponse.json({ error: "권한 없음" }, { status: 403 });
  }

  const { username, password, name, role, team_id } = await request.json();

  if (!username || !password || !name || !role) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const password_hash = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert({ username, password_hash, name, role, team_id })
    .select("id, username, name, role")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "이미 존재하는 아이디입니다" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
