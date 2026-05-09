import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            SJPARTNERS
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition">서비스</a>
            <a href="#results" className="hover:text-slate-900 transition">실적</a>
            <a href="#contact" className="hover:text-slate-900 transition">문의</a>
          </div>
          <Link
            href="/login"
            className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition"
          >
            직원 로그인
          </Link>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">
            정책자금 컨설팅 전문기업
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            정책자금,<br />
            <span className="text-blue-400">제대로</span> 받으세요.
          </h1>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            복잡한 정책자금 신청, SJ Partners가 처음부터 끝까지 함께합니다.
            성공 보수제로 부담 없이 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              무료 상담 신청
            </a>
            <a
              href="#services"
              className="border border-slate-500 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              서비스 알아보기
            </a>
          </div>
        </div>
      </section>

      {/* 숫자 실적 섹션 */}
      <section id="results" className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "누적 고객사" },
              { number: "98%", label: "승인율" },
              { number: "1,200억+", label: "누적 자금 조달" },
              { number: "10년+", label: "업계 경력" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">제공 서비스</h2>
            <p className="text-slate-500 text-lg">기업의 성장을 위한 맞춤형 정책자금 솔루션</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💼",
                title: "정책자금 컨설팅",
                desc: "기업 맞춤형 정책자금 발굴 및 신청 전략 수립. 수백 가지 정책 중 최적의 자금을 찾아드립니다.",
              },
              {
                icon: "📋",
                title: "서류 대행",
                desc: "복잡한 신청 서류를 전문가가 작성합니다. 오류 없는 완벽한 서류로 승인율을 높입니다.",
              },
              {
                icon: "🎯",
                title: "사후 관리",
                desc: "자금 집행 후 관리까지 책임집니다. 조건 이행 및 사후 점검을 통해 불이익을 방지합니다.",
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지원 자금 종류 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">지원 자금 종류</h2>
            <p className="text-slate-500 text-lg">다양한 정책자금을 통해 기업 성장을 지원합니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "창업자금", "시설자금", "운전자금", "R&D 지원금",
              "수출 지원금", "고용 지원금", "녹색성장자금", "지역특화자금",
            ].map((fund) => (
              <div key={fund} className="border border-slate-200 rounded-xl p-4 text-center hover:border-blue-400 hover:bg-blue-50 transition cursor-default">
                <span className="text-slate-700 font-medium">{fund}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">지금 바로 상담받으세요</h2>
          <p className="text-slate-400 text-lg mb-12">
            초기 상담은 무료입니다. 전문 컨설턴트가 직접 연락드립니다.
          </p>
          <div className="bg-slate-800 rounded-2xl p-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="회사명"
                className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 rounded-xl border border-slate-600 focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                placeholder="담당자명"
                className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 rounded-xl border border-slate-600 focus:outline-none focus:border-blue-400"
              />
              <input
                type="tel"
                placeholder="연락처"
                className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 rounded-xl border border-slate-600 focus:outline-none focus:border-blue-400"
              />
              <select className="w-full px-4 py-3 bg-slate-700 text-slate-300 rounded-xl border border-slate-600 focus:outline-none focus:border-blue-400">
                <option value="">관심 자금 유형 선택</option>
                <option>창업자금</option>
                <option>시설자금</option>
                <option>운전자금</option>
                <option>R&D 지원금</option>
                <option>기타</option>
              </select>
              <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-xl font-semibold text-lg transition">
                무료 상담 신청하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="text-white font-bold text-xl mb-1">SJPARTNERS</div>
              <div className="text-sm">정책자금 컨설팅 전문기업</div>
            </div>
            <div className="text-sm text-center">
              <p>대표: 홍길동 | 사업자등록번호: 000-00-00000</p>
              <p>주소: 서울특별시 강남구 테헤란로 000</p>
              <p className="mt-1">Tel: 02-0000-0000 | Email: contact@sjpartners.com</p>
            </div>
            <div className="text-sm">
              © 2025 SJPARTNERS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
