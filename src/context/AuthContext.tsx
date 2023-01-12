import { createContext, useState } from "react";
import { IContextProvider } from "../interfaces/IContextProvider";
import { IProviderProps } from "../interfaces/IProviderProps";
import { IUser } from "../interfaces/IUser";

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ({ children }: IContextProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const [userList, setUserList] = useState([] as IUser[]);

  const [next, setNext] = useState("");

  const [loading, setLoading] = useState(true);

  function createNewUser(userInput: IUser) {
    setUser({ ...user, ...userInput });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        next,
        setNext,
        createNewUser,
        userList,
        setUserList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
