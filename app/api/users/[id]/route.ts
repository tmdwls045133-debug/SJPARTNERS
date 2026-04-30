import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const { role } = await request.json();

    if (!role) {
      return NextResponse.json(
        { error: "역할이 필요합니다" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("users_roles")
      .update({ role })
      .eq("user_id", id)
      .select();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Update user error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
