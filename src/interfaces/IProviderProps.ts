import { Dispatch, SetStateAction } from "react";
import { IUser } from "./IUser";

export interface IProviderProps {
  user: IUser;
  createNewUser: (userInput: IUser) => void;
  userList: IUser[];
  setUserList: Dispatch<SetStateAction<IUser[]>>;
  next: string;
  setNext: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
