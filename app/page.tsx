import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-[#0b0b3b]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tight">SJ Partners</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">소개</a>
            <a href="#services" className="hover:text-white transition">서비스</a>
            <a href="#team" className="hover:text-white transition">전문가 팀</a>
            <a href="#reviews" className="hover:text-white transition">후기</a>
            <a href="#contact" className="hover:text-white transition">상담신청</a>
          </div>
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
          >
            직원 로그인
          </Link>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-20 min-h-screen bg-[#0b0b3b] text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div>
              <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                정책자금 컨설팅 전문
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                정책자금 대출,<br />
                이제 <span className="text-blue-400">쉽게</span> 받으세요
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                복잡한 정책자금 신청, SJ Partners가<br />
                처음부터 끝까지 함께합니다.<br />
                성공 보수제로 부담 없이 시작하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition text-center"
                >
                  무료 상담 신청하기
                </a>
                <a
                  href="#services"
                  className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-base transition text-center"
                >
                  서비스 알아보기
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span>📞 02-0000-0000</span>
                <span>✉ contact@sjpartners.com</span>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-[#0b0b3b] border border-white/10 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <div className="text-8xl mb-4">👔</div>
                  <p className="text-sm">전문 컨설턴트</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실적 섹션 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-slate-600 text-lg mb-12">
            <span className="font-bold text-slate-900">1,200명 이상</span>의 고객님들이 성공적으로 자금을 지원받으셨습니다
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150억원", label: "누적 자금 조달" },
              { number: "120개", label: "협력 금융기관" },
              { number: "93%", label: "승인 성공률" },
              { number: "500+", label: "누적 고객사" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="text-3xl md:text-4xl font-bold text-[#0b0b3b] mb-2">{stat.number}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b3b] mb-4">전문가 팀 서비스</h2>
            <p className="text-slate-500 text-lg">기업의 성장을 위한 맞춤형 정책자금 솔루션</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "정밀 진단", desc: "기업 현황 분석을 통해 최적의 정책자금을 발굴합니다." },
              { icon: "📋", title: "서류 대행", desc: "복잡한 신청 서류를 전문가가 직접 작성해 드립니다." },
              { icon: "🎯", title: "사후 관리", desc: "자금 집행 후 사후 관리까지 책임집니다." },
              { icon: "💼", title: "기업 컨설팅", desc: "정책자금 외 기업 성장 전략을 함께 수립합니다." },
              { icon: "📊", title: "자금 분석", desc: "수백 가지 정책 중 최적의 자금 조합을 제안합니다." },
              { icon: "🤝", title: "밀착 케어", desc: "담당 전문가가 처음부터 끝까지 동행합니다." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#0b0b3b] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전문가 팀 */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b3b] mb-4">6명의 전문가 팀</h2>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                10년 이상의 현장 경험을 가진 전문가들이<br />
                고객 1명에게 1~3명의 전문가가 매칭됩니다
              </p>
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition">
                전문가 상담 신청
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { role: "정책자금 팀장", desc: "중소기업 자금 전문" },
                { role: "금융 컨설턴트", desc: "은행권 10년 경력" },
                { role: "법무 팀", desc: "서류 검토 전담" },
                { role: "기업 분석가", desc: "재무구조 분석" },
                { role: "자금 매니저", desc: "사후관리 전담" },
                { role: "고객 케어", desc: "24/7 대응" },
              ].map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">👤</div>
                  <p className="text-xs font-bold text-[#0b0b3b]">{m.role}</p>
                  <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 진행 프로세스 */}
      <section className="py-24 bg-[#0b0b3b] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A부터 Z까지 전 과정 케어</h2>
            <p className="text-slate-300">정식 의뢰부터 자금 수령까지, SJ Partners가 모든 단계를 함께합니다</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: "🔎", title: "무료 상담 접수", desc: "기업 현황 파악 및 적합한 자금 탐색" },
              { step: "02", icon: "📑", title: "서류 준비", desc: "필요 서류 안내 및 전문가 직접 작성" },
              { step: "03", icon: "📤", title: "신청 대행", desc: "오류 없는 완벽한 서류로 신청 진행" },
              { step: "04", icon: "🔄", title: "심사 모니터링", desc: "심사 과정 실시간 모니터링 및 대응" },
              { step: "05", icon: "✅", title: "승인 및 자금 수령", desc: "승인 후 자금 집행 안내 및 지원" },
              { step: "06", icon: "📌", title: "사후 관리", desc: "조건 이행 관리 및 추가 자금 탐색" },
            ].map((p) => (
              <div key={p.step} className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-400 font-bold text-sm">{p.step}</span>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-600/20 border border-blue-500/30 rounded-2xl p-6 text-center">
            <p className="text-slate-300 text-sm leading-relaxed">
              기존 대출플랫폼과 달리 단순 연결이 아닌, <span className="text-white font-semibold">직접 서류 작성부터 사후관리까지</span> 책임집니다.<br />
              성공 보수제로 운영되어 자금 수령 시에만 수수료가 발생합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 성공 사례 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b3b] mb-4">성공 사례</h2>
            <p className="text-slate-500">SJ Partners와 함께한 실제 고객 성공 이야기</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center">
              <span className="text-6xl">🤝</span>
            </div>
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">제조업 A사</div>
              <h3 className="text-2xl font-bold text-[#0b0b3b] mb-4">시설 투자 자금 5억원 승인</h3>
              <ul className="space-y-3 text-slate-600 text-sm mb-6">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">✓</span> 기존 은행 대출 거절 이력 보유</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">✓</span> SJ Partners 매칭 후 3개월 만에 승인</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">✓</span> 저금리 정책자금으로 이자 부담 대폭 절감</li>
              </ul>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                ↑ 1개월 만에 승인 완료
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            {[
              { number: "100%", label: "성공 보수제" },
              { number: "3개월", label: "평균 처리기간" },
              { number: "24/7", label: "고객 지원" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#0b0b3b] mb-1">{s.number}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b3b] mb-4">실제 고객님들의 생생한 후기</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "김○○ 대표", company: "제조업", amount: "3억원", review: "처음엔 반신반의했는데 정말 빠르게 해결해주셨어요. 담당자분이 끝까지 케어해주셔서 감사합니다." },
              { name: "이○○ 대표", company: "IT 스타트업", amount: "1.5억원", review: "복잡한 서류를 대신 처리해줘서 사업에만 집중할 수 있었어요. 강력 추천합니다." },
              { name: "박○○ 대표", company: "유통업", amount: "5억원", review: "은행에서 거절당했는데 SJ Partners 덕분에 정책자금 받았습니다. 정말 감사해요." },
              { name: "최○○ 대표", company: "서비스업", amount: "2억원", review: "성공 보수제라서 부담 없이 시작했어요. 결과도 너무 만족스럽습니다." },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">"{r.review}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-[#0b0b3b] text-sm">{r.name}</p>
                  <p className="text-slate-500 text-xs">{r.company} · {r.amount} 승인</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 바 */}
      <section className="py-12 bg-[#0b0b3b] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "누적 고객사" },
              { number: "4.9/5.0", label: "평균 고객 평점" },
              { number: "150억+", label: "누적 자금 조달" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{s.number}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 신청 폼 */}
      <section id="contact" className="py-24 bg-[#0f0f4a]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">지금 바로 시작하세요</h2>
            <p className="text-slate-300">초기 상담은 무료입니다. 전담 컨설턴트가 직접 연락드립니다.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">성함</label>
                <input type="text" placeholder="홍길동" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-500 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">회사명</label>
                <input type="text" placeholder="(주)예시회사" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-500 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">연락처</label>
                <input type="tel" placeholder="010-0000-0000" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-500 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">업종</label>
                <input type="text" placeholder="제조업, IT, 서비스업 등" className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-500 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">희망 자금 규모</label>
              <select className="w-full px-4 py-3 bg-white/10 text-slate-300 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 text-sm">
                <option value="" className="bg-[#0b0b3b]">선택해주세요</option>
                <option className="bg-[#0b0b3b]">1억 미만</option>
                <option className="bg-[#0b0b3b]">1억 ~ 3억</option>
                <option className="bg-[#0b0b3b]">3억 ~ 10억</option>
                <option className="bg-[#0b0b3b]">10억 이상</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">문의 내용</label>
              <textarea placeholder="궁금하신 점이나 현재 상황을 간략히 적어주세요" rows={3} className="w-full px-4 py-3 bg-white/10 text-white placeholder-slate-500 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 text-sm resize-none" />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-base transition">
              무료 상담 신청하기 →
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-[#07072e] text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-lg mb-3">SJ Partners</div>
              <p className="text-xs leading-relaxed">정책자금 컨설팅 전문기업<br />기업 성장의 든든한 파트너</p>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3">서비스</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition">정책자금 컨설팅</a></li>
                <li><a href="#services" className="hover:text-white transition">서류 대행</a></li>
                <li><a href="#services" className="hover:text-white transition">사후 관리</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-3">회사</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#team" className="hover:text-white transition">전문가 팀</a></li>
                <li><a href="#reviews" className="hover:text-white transition">고객 후기</a></li>
                <li><a href="#contact" className="hover:text-white transition">상담 신청</a></li>
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
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>대표: 홍길동 | 사업자등록번호: 000-00-00000</p>
            <p>© 2025 SJ Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
