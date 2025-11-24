export enum Tab {
  HOME = 'HOME',
  CREDITS = 'CREDITS'
}

export interface CreditEntry {
  role: string;
  name: string;
  avatarUrl?: string;
}
