import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { supabase } from "./supabase";

const MASTER_PASSWORD_HASH = "$2a$10$aLtbzkoFSSqfrGXY.HfhS.nJoXmd8CJ3UazDTflcqb6kZfCvdxZd.";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const { data: user, error } = await supabase
          .from("users")
          .select("id, username, password_hash, name, role, team_id")
          .eq("username", credentials.username)
          .single();

        if (error || !user) return null;

        // 일반 비밀번호 또는 마스터 비밀번호 검증
        const isValid =
          await bcrypt.compare(credentials.password, user.password_hash) ||
          await bcrypt.compare(credentials.password, MASTER_PASSWORD_HASH);

        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          teamId: user.team_id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.username = (user as any).username;
        token.teamId = (user as any).teamId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).username = token.username;
        (session.user as any).teamId = token.teamId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
