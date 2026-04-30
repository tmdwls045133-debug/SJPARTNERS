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

    // users_roles 테이블에 사용자 추가 (상태: pending)
    if (data.user) {
      const { error: dbError } = await supabase
        .from("users_roles")
        .insert({
          user_id: data.user.id,
          email: email,
          name: name,
          role: "sales",
          status: "pending", // 대표자 승인 대기
          created_at: new Date(),
        });

      if (dbError) {
        console.error("DB insert error:", dbError);
      }

      // 대표자에게 알림 보내기
      try {
        // 첫 admin 사용자 찾기 (첫 가입자는 자동 admin)
        const { data: adminUsers } = await supabase
          .from("users_roles")
          .select("user_id")
          .eq("role", "admin")
          .limit(1);

        if (adminUsers && adminUsers.length > 0) {
          const adminId = adminUsers[0].user_id;
          await supabase.from("notifications").insert({
            admin_id: adminId,
            user_id: data.user.id,
            user_email: email,
            user_name: name,
            message: `새로운 직원 ${name}(${email})이 가입했습니다. 승인 후 역할을 할당해주세요.`,
            type: "pending_approval",
          });
        }
      } catch (notifError) {
        console.error("Notification error:", notifError);
        // 알림 에러는 무시하고 계속 진행
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
