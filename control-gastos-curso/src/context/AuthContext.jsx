import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ⬅️ Inicializa como null en lugar de []

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!session) {
          setUser(null);
        } else {
          setUser(session.user.user_metadata);
          console.log("event:", event);
          console.log("session:", session.user.user_metadata);
        }
      }
    );

    // ⬅️ Corrección: Desuscribirse correctamente para evitar memory leaks
    return () => authListener.subscription?.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
