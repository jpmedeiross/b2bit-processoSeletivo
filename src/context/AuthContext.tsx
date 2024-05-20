import { createContext, useEffect, useState } from "react";
import api from "../services/Api";
import { User } from "../types/User";
import React from "react";
import { useToast } from "../components/feats/use-toast";

interface AuthContextProps {
  user: User | null;
  login: (values: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated: boolean = !!user;
  const { toast } = useToast();

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem("access");

    if (accessToken && !isAuthenticated) {
      getUser().catch((error) => console.error(error));
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    toast({
      description: `See you next time.`,
      title: "Bye!",
    });
    setUser(null);
  };

  const login = async (values: { email: string; password: string }) => {
    const path = "/auth/login/";
    try {
      const response = await api.post(path, values);
      localStorage.setItem("access", response.data.tokens.access);
      localStorage.setItem("refresh", response.data.tokens.refresh);
      await getUser();
      toast({
        description: `Welcome, ${response.data.user.name}!`,
      });
    } catch (error: any) {
      toast({
        description:
          error.response?.data.detail ||
          error.message ||
          "An unknown error occurred.",
        title: "Ops!",
        variant: "destructive",
      });

      throw error;
    }
  };

  const getUser = async () => {
    const path = "/auth/profile/";
    try {
      const response = await api.get(path);
      setUser(response.data);
    } catch (error: any) {
      toast({
        description:
          error.response?.data.detail ||
          error.message ||
          "An unknown error occurred.",
        title: "Ops!",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};