export interface IUser {
  _id: Id;
  fname: string;
  lname: string;
  email: string;
  hashedAndSaltedPassword: string;
  emailVerified: boolean;
  address: Address[];
  phoneNumber: string;
  createdAt: CreatedAt;
  updatedAt: CreatedAt;
  searchHistory: SearchHistory[];
  __v: number;
}

interface SearchHistory {
  suggestion: string;
}

interface CreatedAt {
  '$date': string;
}

interface Address {
  _id: Id;
  street1: string;
}

interface Id {
  '$oid': string;
}