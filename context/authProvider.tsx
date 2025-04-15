import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { createUser, UserType } from "@/services/firestore/user";
import { useRouter } from "expo-router";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  register: (userInfos: UserType, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const initValue: AuthContextType = {
  user: auth.currentUser,
  isAuthenticated: false,
  loading: false,
  register: async (userInfos: UserType, password: string) => {
    return {} as UserCredential;
  },
  login: async (email: string, password: string) => {
    return {} as UserCredential;
  },
  logout: async () => { },
}

export const AuthContext = createContext<AuthContextType>(initValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (userInfos: UserType, password: string) => {
    const createdUser = await createUserWithEmailAndPassword(auth, userInfos.email, password)
    createUser(createdUser.user.uid, userInfos)
    return createdUser
  };

  const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
    router.replace("/Plan")
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      register,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}