import Sidebar from "@/components/Sidebar";

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-8 py-4">
          <h2 className="text-lg font-semibold text-slate-800">SJPARTNERS</h2>
        </header>
        <div className="flex-1 overflow-auto p-8">{children}</div>
      </main>
    </div>
  );
}
