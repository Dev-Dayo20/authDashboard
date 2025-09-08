import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type UserRole = "admin" | "agent" | "beneficiary";
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}
// AUTHENTICATION PROVIDER FUNCTION
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  //   LOGIN FUNCTION
  const login = async (email: String, password: String): Promise<boolean> => {
    try {
      setLoading(true);
      const mockLogin = (email: String, password: String): User | null => {
        const mockUsers: User[] = [
          {
            id: "1",
            name: "Admin User",
            email: "admin@company.com",
            role: "admin",
          },
          {
            id: "2",
            name: "John Agent",
            email: "agent@company.com",
            role: "agent",
          },
          {
            id: "3",
            name: "Jane Doe",
            email: "beneficiary@company.com",
            role: "beneficiary",
          },
        ];
        const user = mockUsers.find(
          (u) => u.email === email && password === "password123"
        );

        return user || null;
      };

      const authenticatedUser = mockLogin(email, password);
      if (authenticatedUser) {
        setUser(authenticatedUser);
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // In real app, you might want to call API to invalidate token
    // api.logout();
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
