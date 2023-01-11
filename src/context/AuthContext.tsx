import { createContext, useState } from "react";
import { IContextProvider } from "../interfaces/IContextProvider";
import { IProviderProps } from "../interfaces/IProviderProps";
import { IUser } from "../interfaces/IUser";

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ({ children }: IContextProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const [visible, setIsVisible] = useState(false);

  const [register, setIsRegister] = useState(false);

  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider
      value={{ user, loading, visible, setIsVisible, register, setIsRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
