import { IBooking } from "./IBooking";

export interface IUser {
  id?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  profilePic?: string | null;
  refreshToken: string;
  borrowedBooks: IBooking[];
  role: string;
}
