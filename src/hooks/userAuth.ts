import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  userType: 'PATIENT' | 'DOCTOR';
  phoneNumber: string;
  dateJoined: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  signup: (
    userData: SignupData
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<boolean>;
}

interface SignupData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  userType: 'PATIENT' | 'DOCTOR';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useAuthProvider(): AuthContextType {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fix the useEffect dependency issue
  const refreshToken = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        localStorage.setItem('accessToken', data.accessToken);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      return false;
    }
  };

  useEffect(() => {
    // Check for existing session on mount
    const initializeAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const success = await refreshToken();
        if (!success) {
          localStorage.removeItem('accessToken');
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []); // Remove refreshToken from dependencies

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        localStorage.setItem('accessToken', data.accessToken);
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error}; // Fixed error handling
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        localStorage.setItem('accessToken', data.accessToken);
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error}; // Fixed error handling
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('accessToken');
    }
  };

  return {
    user,
    isLoading,
    login,
    signup,
    logout,
    refreshToken,
  };
}

export { AuthContext };
