import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { validateEmail, validatePassword, validateRequired } from '../utils/validation';

interface AuthProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Auth: React.FC<AuthProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, register } = useAuthStore();

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;
    
    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;
    
    if (!isLogin) {
      const nameError = validateRequired(name, 'Name');
      if (nameError) newErrors.name = nameError;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      let success = false;
      
      if (isLogin) {
        success = await login(email, password);
      } else {
        success = await register(email, password, name);
      }
      
      if (success) {
        onClose();
        setEmail('');
        setPassword('');
        setName('');
        setErrors({});
      } else {
        setErrors({ general: 'Invalid credentials. Please try again.' });
      }
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setErrors({});
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">{errors.name}</p>
                )}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium transition duration-150 ease-in-out ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'
              } text-white`}
            >
              {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={switchMode}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};