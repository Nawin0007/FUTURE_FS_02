import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  searchTerm,
  onSearchChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCartStore();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const itemCount = getItemCount();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ShopEasy
            </h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/orders')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition font-medium"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    navigate('/');
                  }}
                  className="text-gray-500 hover:text-red-500 transition font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition"
                >
                  Register
                </Link>
              </div>
            )}

            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-3">
            {user ? (
              <>
                <Link
                  to="/orders"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center w-full space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                    navigate('/');
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-red-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md transition"
                >
                  Register
                </Link>
              </>
            )}

            <button
              onClick={() => {
                onCartClick();
                setIsMenuOpen(false);
              }}
              className="relative flex items-center w-full space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart ({itemCount})</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
