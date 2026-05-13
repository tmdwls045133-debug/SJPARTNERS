import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-[#0b0b3b]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tight">SJ Partners</div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">소개</a>
            <a href="#services" className="hover:text-white transition">서비스</a>
            <a href="#team" className="hover:text-white transition">전문가 팀</a>
            <a href="#reviews" className="hover:text-white transition">후기</a>
            <a href="#contact" className="hover:text-white transition">상담신청</a>
          </div>
          <Link href="/login" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
            직원 로그인
          </Link>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="relative min-h-screen bg-[#0b0b3b] text-white flex items-center overflow-hidden pt-16">
        {/* 배경 장식 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-700/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[80px]" />
          {/* 그리드 패턴 */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(#4444ff 1px, transparent 1px), linear-gradient(90deg, #4444ff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                정책자금 컨설팅 전문
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                정책자금 대출,<br />
                이제 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">쉽게</span><br />
                받으세요
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                복잡한 정책자금 신청, SJ Partners가<br className="hidden sm:block" />
                처음부터 끝까지 함께합니다.<br className="hidden sm:block" />
                <span className="text-blue-300 font-semibold">성공 보수제</span>로 부담 없이 시작하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base transition text-center shadow-lg shadow-blue-900/50 hover:shadow-blue-600/40 hover:-translate-y-0.5 transform">
                  무료 상담 신청하기
                </a>
                <a href="#services" className="border border-white/20 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base transition text-center">
                  서비스 알아보기
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center text-base">📞</div>
                  <span>02-0000-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center text-base">✉</div>
                  <span>contact@sjpartners.com</span>
                </div>
              </div>
            </div>

            {/* 히어로 - 사진 + 카드들 */}
            <div className="hidden md:flex relative h-[520px] items-end gap-4">
              {/* 프로필 사진 */}
              <div className="relative h-[480px] w-52 flex-shrink-0 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="/hero.jpg" alt="대표 컨설턴트" className="w-full h-full object-cover object-top" />
              </div>
              {/* 카드들 */}
              <div className="flex-1 relative h-[520px]">
              <div className="absolute top-0 right-0 w-64 bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <div>
                    <p className="text-white font-semibold text-sm">승인 완료</p>
                    <p className="text-slate-400 text-xs">제조업 A사 · 방금 전</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">3억 2천만원</div>
                <div className="text-blue-300 text-xs">시설투자자금 승인</div>
              </div>

              <div className="absolute top-36 left-0 w-64 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 shadow-2xl">
                <p className="text-blue-200 text-xs mb-2">평균 승인율</p>
                <div className="text-4xl font-bold text-white mb-3">93%</div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div className="h-2 bg-white rounded-full w-[93%]" />
                </div>
              </div>

              <div className="absolute bottom-8 right-4 w-68 bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 shadow-2xl">
                <p className="text-slate-300 text-xs mb-3">누적 자금 조달</p>
                <div className="text-3xl font-bold text-white">150억+</div>
                <div className="flex items-center gap-1 mt-2 text-green-400 text-xs">
                  <span>▲</span><span>전년 대비 32% 증가</span>
                </div>
              </div>

              <div className="absolute bottom-40 right-0 w-56 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex -space-x-2 mb-2">
                  {["🧑","👩","👨","🧑","👩"].map((e, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#0b0b3b] flex items-center justify-center text-sm">{e}</div>
                  ))}
                </div>
                <p className="text-white text-xs font-semibold">500+ 고객사</p>
                <p className="text-slate-400 text-xs">와 함께하고 있습니다</p>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* 스크롤 안내 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce">
          <span>스크롤</span>
          <span>↓</span>
        </div>
      </section>

      {/* 실적 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-center text-slate-500 text-base sm:text-lg mb-12">
              <span className="font-bold text-slate-900">1,200명 이상</span>의 고객님들이 성공적으로 자금을 지원받으셨습니다
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { end: 150, suffix: "억원", label: "누적 자금 조달", icon: "💰", color: "from-blue-500 to-blue-600" },
              { end: 120, suffix: "개+", label: "협력 금융기관", icon: "🏦", color: "from-indigo-500 to-indigo-600" },
              { end: 93, suffix: "%", label: "승인 성공률", icon: "✅", color: "from-violet-500 to-violet-600" },
              { end: 500, suffix: "+", label: "누적 고객사", icon: "🏢", color: "from-blue-600 to-indigo-600" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#0b0b3b] mb-1">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">서비스</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0b3b] mb-4">맞춤형 정책자금 솔루션</h2>
              <p className="text-slate-500">기업의 성장 단계에 맞는 최적의 자금을 찾아드립니다</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "🔍", title: "정밀 진단", desc: "기업 현황 분석으로 최적 정책자금 발굴", color: "group-hover:bg-blue-600" },
              { icon: "📋", title: "서류 대행", desc: "전문가가 직접 작성하는 완벽한 서류", color: "group-hover:bg-indigo-600" },
              { icon: "🎯", title: "사후 관리", desc: "자금 집행 후 조건 이행까지 책임", color: "group-hover:bg-violet-600" },
              { icon: "💼", title: "기업 컨설팅", desc: "정책자금 + 기업 성장 전략 수립", color: "group-hover:bg-blue-600" },
              { icon: "📊", title: "자금 분석", desc: "수백 가지 정책 중 최적 조합 제안", color: "group-hover:bg-indigo-600" },
              { icon: "🤝", title: "밀착 케어", desc: "전담 전문가의 A~Z 원스톱 서비스", color: "group-hover:bg-violet-600" },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80}>
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-100 ${s.color} transition-colors duration-300 flex items-center justify-center text-3xl mb-5`}>
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0b0b3b] mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 전문가 팀 */}
      <section id="team" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">전문가 팀</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0b3b] mb-4">
                6명의 전문가가<br />직접 케어합니다
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                10년 이상의 현장 경험을 가진 전문가들이<br />
                고객 1명에게 1~3명이 밀착 매칭됩니다.
              </p>
              <div className="space-y-3 mb-8">
                {["정책자금 신청 10년 이상 경력", "금융권 출신 전문 컨설턴트", "법무·서류 전담 팀 운영"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs flex-shrink-0">✓</div>
                    {t}
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-block bg-[#0b0b3b] hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold transition shadow-lg hover:-translate-y-0.5 transform">
                전문가 상담 신청 →
              </a>
            </AnimatedSection>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { role: "팀장", desc: "정책자금 전문", emoji: "👨‍💼" },
                { role: "컨설턴트", desc: "금융 10년 경력", emoji: "👩‍💼" },
                { role: "법무팀", desc: "서류 검토 전담", emoji: "👨‍⚖️" },
                { role: "분석가", desc: "재무구조 전문", emoji: "📊" },
                { role: "매니저", desc: "사후관리 전담", emoji: "🤝" },
                { role: "케어팀", desc: "24/7 고객 대응", emoji: "💬" },
              ].map((m, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="bg-slate-50 hover:bg-blue-50 rounded-2xl p-4 text-center transition-colors duration-300 border border-transparent hover:border-blue-200">
                    <div className="text-3xl mb-2">{m.emoji}</div>
                    <p className="text-xs font-bold text-[#0b0b3b]">{m.role}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{m.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="py-24 bg-[#0b0b3b] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">프로세스</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">A부터 Z까지 전 과정 케어</h2>
              <p className="text-slate-300">정식 의뢰부터 자금 수령까지, 모든 단계를 함께합니다</p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { step: "01", icon: "🔎", title: "무료 상담 접수", desc: "기업 현황 파악 및 적합한 자금 탐색", color: "from-blue-600 to-blue-700" },
              { step: "02", icon: "📑", title: "서류 준비", desc: "필요 서류 안내 및 전문가 직접 작성", color: "from-indigo-600 to-indigo-700" },
              { step: "03", icon: "📤", title: "신청 대행", desc: "오류 없는 완벽한 서류로 신청 진행", color: "from-violet-600 to-violet-700" },
              { step: "04", icon: "🔄", title: "심사 모니터링", desc: "심사 과정 실시간 모니터링 및 대응", color: "from-blue-600 to-indigo-600" },
              { step: "05", icon: "✅", title: "승인 및 수령", desc: "승인 후 자금 집행 안내 및 지원", color: "from-indigo-600 to-violet-600" },
              { step: "06", icon: "📌", title: "사후 관리", desc: "조건 이행 관리 및 추가 자금 탐색", color: "from-violet-600 to-blue-600" },
            ].map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 80}>
                <div className="group relative bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} text-2xl mb-4 shadow-lg`}>
                    {p.icon}
                  </div>
                  <div className="text-blue-400 text-xs font-bold mb-2">STEP {p.step}</div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 rounded-2xl p-6 text-center">
              <p className="text-slate-300 text-sm leading-relaxed">
                단순 연결이 아닌, <span className="text-white font-bold">직접 서류 작성부터 사후관리까지</span> 책임집니다.<br />
                <span className="text-blue-300">성공 보수제</span> — 자금 수령 시에만 수수료가 발생합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 성공 사례 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">성공 사례</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0b3b]">SJ Partners와 함께한<br className="sm:hidden" /> 실제 성공 사례</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-[#0b0b3b] to-blue-900 rounded-3xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "linear-gradient(#4444ff 1px, transparent 1px), linear-gradient(90deg, #4444ff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="relative text-center">
                  <div className="text-6xl mb-3">🤝</div>
                  <div className="text-white font-bold">성공적인 파트너십</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">제조업 A사</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0b3b] mb-4">시설 투자 자금<br /><span className="text-blue-600">5억원 승인</span></h3>
              <div className="space-y-3 mb-6">
                {[
                  "기존 은행 대출 2회 거절 이력 보유",
                  "SJ Partners 매칭 후 단 3개월 만에 승인",
                  "저금리 정책자금으로 이자 부담 62% 절감",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs flex-shrink-0 mt-0.5">✓</div>
                    {t}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold">
                <span>⚡</span> 3개월 만에 승인 완료
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { end: 100, suffix: "%", label: "성공 보수제" },
              { end: 3, suffix: "개월", label: "평균 처리기간" },
              { end: 24, suffix: "/7", label: "고객 지원" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0b0b3b] mb-1">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-slate-500 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">고객 후기</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0b3b] mb-2">실제 고객님들의 생생한 후기</h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: "김○○ 대표", company: "제조업", amount: "3억원", stars: 5, review: "처음엔 반신반의했는데 정말 빠르게 해결해주셨어요. 담당자분이 끝까지 케어해주셔서 감사합니다." },
              { name: "이○○ 대표", company: "IT 스타트업", amount: "1.5억원", stars: 5, review: "복잡한 서류를 대신 처리해줘서 사업에만 집중할 수 있었어요. 강력 추천합니다." },
              { name: "박○○ 대표", company: "유통업", amount: "5억원", stars: 5, review: "은행에서 거절당했는데 SJ Partners 덕분에 정책자금 받았습니다. 정말 감사해요." },
              { name: "최○○ 대표", company: "서비스업", amount: "2억원", stars: 5, review: "성공 보수제라서 부담 없이 시작했어요. 결과도 너무 만족스럽습니다." },
            ].map((r, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="text-yellow-400 text-sm mb-3">{"★".repeat(r.stars)}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">"{r.review}"</p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-[#0b0b3b] text-sm">{r.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{r.company} · {r.amount} 승인</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 바 */}
      <section className="py-16 bg-gradient-to-r from-[#0b0b3b] via-blue-900 to-[#0b0b3b] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { end: 500, suffix: "+", label: "누적 고객사" },
              { label: "평균 고객 평점", fixed: "4.9/5.0" },
              { end: 150, suffix: "억+", label: "누적 자금 조달" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-1">
                    {s.fixed ? s.fixed : <CountUp end={s.end!} suffix={s.suffix} />}
                  </div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 신청 */}
      <section id="contact" className="py-24 bg-[#0b0b3b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">무료 상담</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">지금 바로 시작하세요</h2>
              <p className="text-slate-300 text-sm">초기 상담은 무료입니다. 전담 컨설턴트가 직접 연락드립니다.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">성함 *</label>
                  <input type="text" placeholder="홍길동" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-600 rounded-xl border border-white/10 focus:outline-none focus:border-blue-400 text-sm transition" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">회사명 *</label>
                  <input type="text" placeholder="(주)예시회사" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-600 rounded-xl border border-white/10 focus:outline-none focus:border-blue-400 text-sm transition" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">연락처 *</label>
                  <input type="tel" placeholder="010-0000-0000" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-600 rounded-xl border border-white/10 focus:outline-none focus:border-blue-400 text-sm transition" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">업종</label>
                  <input type="text" placeholder="제조업, IT 등" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-600 rounded-xl border border-white/10 focus:outline-none focus:border-blue-400 text-sm transition" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">희망 자금 규모</label>
                <select className="w-full px-4 py-3 bg-white/10 text-slate-300 rounded-xl border border-white/10 focus:outline-none focus:border-blue-400 text-sm">
                  <option value="" className="bg-[#0b0b3b]">선택해주세요</option>
                  <option className="bg-[#0b0b3b]">1억 미만</option>
                  <option className="bg-[#0b0b3b]">1억 ~ 3억</option>
                  <option className="bg-[#0b0b3b]">3억 ~ 10억</option>
                  <option className="bg-[#0b0b3b]">10억 이상</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">문의 내용</label>
                <textarea placeholder="궁금하신 점이나 현재 상황을 간략히 적어주세요" rows={3} className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-600 rounded-xl border border-white/10 focus:outline-none focus:border-blue-400 text-sm resize-none transition" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-base transition shadow-lg shadow-blue-900/50 hover:shadow-blue-600/30 hover:-translate-y-0.5 transform">
                무료 상담 신청하기 →
              </button>
              <p className="text-center text-xs text-slate-500">평일 09:00~18:00 운영 · 접수 후 1영업일 내 연락</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-[#07072e] text-slate-400 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="text-white font-bold text-lg mb-3">SJ Partners</div>
              <p className="text-xs leading-relaxed mb-4">정책자금 컨설팅 전문기업<br />기업 성장의 든든한 파트너</p>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3">서비스</div>
              <ul className="space-y-2 text-xs">
                {["정책자금 컨설팅", "서류 대행", "사후 관리", "기업 컨설팅"].map(t => (
                  <li key={t}><a href="#services" className="hover:text-white transition">{t}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3">회사</div>
              <ul className="space-y-2 text-xs">
                {["전문가 팀","고객 후기","상담 신청"].map(t => (
                  <li key={t}><a href="#" className="hover:text-white transition">{t}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3">연락처</div>
              <ul className="space-y-2 text-xs">
                <li>📞 02-0000-0000</li>
                <li>✉ contact@sjpartners.com</li>
                <li>📍 서울특별시 강남구</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p>대표: 홍길동 · 사업자등록번호: 000-00-00000</p>
            <p>© 2025 SJ Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
