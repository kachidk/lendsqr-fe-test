export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: Date;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: number | bigint;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}
