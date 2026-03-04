export interface Policy {
  id: string;
  type: string;
  number: string;
  status: string;
  coverageAmount: string;
  deductible: string;
  nextPaymentDate: string;
}

export interface Claim {
  id: string;
  type: string;
  title: string;
  status: string;
  updatedAt: string;
}

export interface Tip {
  title: string;
  body: string;
}

export const MOCK_POLICIES: Policy[] = [
  {
    id: 'auto-1',
    type: 'Comprehensive Auto',
    number: 'AUTO-1234-5678',
    status: 'Active',
    coverageAmount: '$50,000',
    deductible: '$500',
    nextPaymentDate: 'Mar 20, 2026',
  },
  {
    id: 'home-1',
    type: 'Home Insurance',
    number: 'HOME-9876-5432',
    status: 'Active',
    coverageAmount: '$250,000',
    deductible: '$1,000',
    nextPaymentDate: 'Apr 5, 2026',
  },
];

export const MOCK_CLAIMS: Claim[] = [
  {
    id: 'claim-1',
    type: 'Auto',
    title: 'Windshield damage',
    status: 'In review',
    updatedAt: 'Mar 2, 2026',
  },
];

export const MOCK_TIPS: Tip[] = [
  {
    title: 'What to do after an accident',
    body:
      'Stay safe, take photos, and collect information before you submit a claim. We guide you step by step.',
  },
  {
    title: 'Keep your policy up to date',
    body:
      'Review your coverage annually to make sure it still matches your car, home, and lifestyle.',
  },
];
