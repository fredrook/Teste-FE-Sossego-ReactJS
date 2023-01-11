import { createContext, useState } from "react";
import { IContextProvider } from "../interfaces/IContextProvider";
import { IProviderProps } from "../interfaces/IProviderProps";
import { IUser } from "../interfaces/IUser";

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ({ children }: IContextProvider) => {
  const [user, setUser] = useState<IUser[]>({} as IUser[]);

  const [next, setNext] = useState("");

  const [register, setIsRegister] = useState(false);

  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider
      value={{ user, loading, setLoading, next, setNext, register, setIsRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
