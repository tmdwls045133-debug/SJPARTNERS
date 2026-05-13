import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  const { data, error } = await supabase
    .from("users")
    .select("id, username, name, role");

  const testHash = await bcrypt.compare("0515", "$2a$10$ViASjOHxZ.9ndo5VHyDKteW.xaj5d9xGfqhL.br1QHabRqvz93nWy");

  return NextResponse.json({
    users: data,
    error: error?.message,
    bcryptTest: testHash,
  });
}
