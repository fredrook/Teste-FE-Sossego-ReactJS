import { Dispatch, SetStateAction } from "react";
import { IUser } from "./IUser";

export interface IProviderProps {
    user: IUser[];
    next: string;
    setNext: Dispatch<SetStateAction<string>>;
    register: boolean;
    setIsRegister: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}