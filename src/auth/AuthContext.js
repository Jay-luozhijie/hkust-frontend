import React, { createContext, useContext, useState, useEffect  } from 'react';
import { useSelector } from 'react-redux';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    console.log('redirect')
    if (userInfo) {
      console.log('yes')
      setIsAuthenticated(true);
      setUser(userInfo);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [userInfo]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);