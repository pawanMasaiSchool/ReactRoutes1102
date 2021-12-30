import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [Auth, setAuth] = useState(false);

  const handleSignIn = () => {
    if (Auth === false) {
      setAuth(true);
    } else {
      return true;
    }
  };

  const handleSignOut = () => {
    if (Auth === true) {
      setAuth(false);
    }
  };

  const value = [Auth, { handleSignIn, handleSignOut }];
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
