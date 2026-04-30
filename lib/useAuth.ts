import { create } from 'zustand';
import { supabase } from './supabase';

interface AuthStore {
  user: any | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  isAuthenticated: false,

  checkAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      set({
        user: session?.user || null,
        isAuthenticated: !!session,
        loading: false,
      });
    } catch (error) {
      console.error('Auth check error:', error);
      set({ loading: false });
    }
  },

  login: async (email: string, password: string) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set({
        user: data.user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      console.error('Login error:', error);
      set({ loading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      await supabase.auth.signOut();
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    } catch (error) {
      console.error('Logout error:', error);
      set({ loading: false });
    }
  },
}));
