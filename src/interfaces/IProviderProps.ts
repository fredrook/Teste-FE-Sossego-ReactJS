import { Dispatch, SetStateAction } from "react";
import { IUser } from "./IUser";

export interface IProviderProps {
    user: IUser
    visible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    register: boolean;
    setIsRegister: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
}