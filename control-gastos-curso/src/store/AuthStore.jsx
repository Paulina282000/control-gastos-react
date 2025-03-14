import { create } from "zustand";
import { supabase } from "../index";

export const useAuthStore = create((set) => ({
  isAuth: false,
  datauserGoogle: null, // Ahora almacena los datos del usuario correctamente.

  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw new Error("Ocurrió un error durante la autenticación");

      set({ isAuth: true, datauserGoogle: data });

      return data;
    } catch (error) {
      console.error("Authentication error:", error);
      return null;
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("Ocurrió un error durante el cierre de sesión");

      set({ isAuth: false, datauserGoogle: null });
    } catch (error) {
      console.error("SignOut error:", error);
    }
  },
}));
