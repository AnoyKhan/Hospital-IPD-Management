import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

const STORAGE_KEY = 'hospital_auth';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // 'Admin' | 'Doctor' | 'Nurse' | 'Pharmacist' | 'Accounts'
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
        setRole(parsed.role || null);
        setToken(parsed.token || null);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const payload = JSON.stringify({ user, role, token });
    localStorage.setItem(STORAGE_KEY, payload);
  }, [user, role, token]);

  const login = ({ username, role }) => {
    // Placeholder login: generate fake token
    setUser({ name: username });
    setRole(role);
    setToken('demo-token');
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setToken(null);
  };

  const value = useMemo(() => ({ user, role, token, login, logout }), [user, role, token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
