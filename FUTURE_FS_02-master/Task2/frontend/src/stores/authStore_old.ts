import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Order } from '../types';

interface AuthStore {
  user: User | null;
  orders: Order[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  addOrder: (order: Order) => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      orders: [],
      
      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (email && password.length >= 6) {
          const user: User = {
            id: Date.now().toString(),
            email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString()
          };
          set({ user });
          return true;
        }
        return false;
      },
      
      register: async (email: string, password: string, name: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (email && password.length >= 6 && name) {
          const user: User = {
            id: Date.now().toString(),
            email,
            name,
            createdAt: new Date().toISOString()
          };
          set({ user });
          return true;
        }
        return false;
      },
      
      logout: () => {
        set({ user: null });
      },
      
      addOrder: (order) => {
        set({ orders: [...get().orders, order] });
      },
      
      isAuthenticated: () => {
        return get().user !== null;
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);