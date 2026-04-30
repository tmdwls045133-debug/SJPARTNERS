import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SJPARTNERS",
  description: "SJPARTNERS 내부 전산 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex bg-slate-50">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-slate-200 px-8 py-4">
            <h2 className="text-lg font-semibold text-slate-800">
              SJPARTNERS
            </h2>
          </header>
          <div className="flex-1 overflow-auto p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
