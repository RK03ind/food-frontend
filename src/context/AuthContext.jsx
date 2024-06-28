import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  setToken: () => {},
});

const AuthProvider = ({ children }) => {
  let storedAuthData;
  try {
    storedAuthData = JSON.parse(localStorage.getItem("token"));
  } catch {
    storedAuthData = null;
  }
  const [userData, setUserData] = useState(storedAuthData);

  const contextData = {
    userData: userData,
    setUserData: setUserData,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
