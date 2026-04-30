// 더미 데이터

export const mockCustomers = [
  {
    id: 1,
    company: "ABC 제조업체",
    contact: "김영수",
    phone: "010-1234-5678",
    consultDate: "2025-03-15",
    status: "소통중",
    manager: "이순신",
  },
  {
    id: 2,
    company: "XYZ 식품",
    contact: "박민지",
    phone: "010-2345-6789",
    consultDate: "2025-03-20",
    status: "소통중",
    manager: "이순신",
  },
  {
    id: 3,
    company: "한우 수입업",
    contact: "최준호",
    phone: "010-3456-7890",
    consultDate: "2025-03-10",
    status: "계약완료",
    manager: "강감찬",
  },
  {
    id: 4,
    company: "디지털 스타트업",
    contact: "정수진",
    phone: "010-4567-8901",
    consultDate: "2025-03-22",
    status: "소통중",
    manager: "강감찬",
  },
  {
    id: 5,
    company: "건설 회사 A",
    contact: "이건호",
    phone: "010-5678-9012",
    consultDate: "2025-03-05",
    status: "계약완료",
    manager: "이순신",
  },
];

export const mockContracts = [
  {
    id: 1,
    company: "한우 수입업",
    contractDate: "2025-03-18",
    service: "정책자금 컨설팅",
    expectedAmount: "50,000,000",
  },
  {
    id: 2,
    company: "건설 회사 A",
    contractDate: "2025-03-12",
    service: "자금 신청 대행",
    expectedAmount: "100,000,000",
  },
];

export const mockFundingCases = [
  {
    id: 1,
    company: "한우 수입업",
    status: "서류취합중",
    manager: "조은희",
    dueDate: "2025-04-05",
    documents: { submitted: 2, total: 5 },
  },
  {
    id: 2,
    company: "건설 회사 A",
    status: "신청",
    manager: "조은희",
    dueDate: "2025-04-15",
    documents: { submitted: 4, total: 5 },
  },
  {
    id: 3,
    company: "삼성 부품사",
    status: "진행중",
    manager: "박영철",
    dueDate: "2025-05-01",
    documents: { submitted: 5, total: 5 },
  },
  {
    id: 4,
    company: "의료기기 제조사",
    status: "미접수",
    manager: "박영철",
    dueDate: "2025-04-20",
    documents: { submitted: 0, total: 5 },
  },
];

export const mockDashboardStats = {
  totalCustomers: mockCustomers.length,
  activeContracts: mockContracts.length,
  fundingInProgress: mockFundingCases.filter(
    (f) => f.status !== "완료"
  ).length,
  completionRate: "65%",
};
