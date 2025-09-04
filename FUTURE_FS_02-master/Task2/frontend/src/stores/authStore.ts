import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Order } from '../types';

export interface AuthStore {
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

      // ✅ Real backend login
      login: async (email: string, password: string) => {
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) return false;
          const data = await res.json();

          if (data.success) {
            const user: User = {
              id: data.user.id,
              email: data.user.email,
              name: data.user.name,
              createdAt: new Date().toISOString(),
            };
            set({ user });
            localStorage.setItem('token', data.token);
            return true;
          }
          return false;
        } catch (error) {
          console.error('Login failed:', error);
          return false;
        }
      },

      // ✅ Real backend register
      register: async (email: string, password: string, name: string) => {
        try {
          console.log('Attempting to register with:', { email, name }); // Don't log password
          
          const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password, name }),
          });

          console.log('Registration response status:', res.status);
          const data = await res.json();
          console.log('Registration response:', data);

          if (!res.ok) {
            console.error('Registration failed:', data.message || 'Unknown error');
            throw new Error(data.message || 'Registration failed');
          }

          if (data.success) {
            const user: User = {
              id: data.user.id,
              email: data.user.email,
              name: data.user.name,
              createdAt: new Date().toISOString(),
            };
            console.log('Setting user data:', user);
            set({ user });
            localStorage.setItem('token', data.token);
            return true;
          }
          
          throw new Error(data.message || 'Registration failed');
        } catch (error) {
          console.error('Register failed:', error);
          throw error;
        }
      },

      logout: () => {
        set({ user: null });
        localStorage.removeItem('token');
      },

      addOrder: (order) => {
        set({ orders: [...get().orders, order] });
      },

      isAuthenticated: () => {
        return get().user !== null;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
