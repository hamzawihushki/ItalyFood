import { createContext, useState, useContext } from "react";
export let UserContext = createContext({});
export let UserProvider = ({ children }) => {
  const [user, setUser] = useState("hamza");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
