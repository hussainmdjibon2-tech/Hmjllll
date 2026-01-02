
export enum UserStatus {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED'
}

export interface User {
  id: string;
  name: string;
  phone: string;
  status: UserStatus;
  balance: number;
  totalProfit: number;
  referrals: number;
}

export interface InvestmentPlan {
  id: number;
  name: string;
  minAmount: number;
  dailyProfit: string;
  dailyProfitDetail: string;
  duration: string;
  durationDetail: string;
  color: string;
  icon: React.ReactNode;
}

export interface Task {
  id: number;
  title: string;
  reward: number;
  completed: boolean;
}
