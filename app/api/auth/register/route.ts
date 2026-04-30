import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "이메일, 비밀번호, 이름이 필요합니다" },
        { status: 400 }
      );
    }

    // Supabase에 사용자 등록
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    // users_roles 테이블에 사용자 추가 (기본 역할: sales)
    if (data.user) {
      const { error: dbError } = await supabase
        .from("users_roles")
        .insert({
          user_id: data.user.id,
          email: email,
          name: name,
          role: "sales", // 기본 역할
          created_at: new Date(),
        });

      if (dbError) {
        console.error("DB insert error:", dbError);
        // DB 에러는 무시하고 계속 진행
      }
    }

    return NextResponse.json(
      { message: "회원가입 성공", user: data.user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: error.message || "회원가입 실패" },
      { status: 500 }
    );
  }
}
