import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();

  if (!isOpen) return null;

  const subtotal = getTotal();
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl rounded-l-2xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h2 className="text-lg font-semibold">🛒 Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition duration-150 ease-in-out"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4 font-medium">
                  Your cart is empty 😢
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl bg-white hover:shadow-md transition"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-1 text-gray-500 hover:text-indigo-600 rounded transition"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="w-8 text-center text-sm font-medium">
                        {quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-1 text-gray-500 hover:text-indigo-600 rounded transition"
                      >
                        <Plus className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => removeItem(product.id)}
                        className="p-1 text-red-500 hover:text-red-700 rounded transition ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-white">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 text-gray-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onCheckout();
                  onClose();
                }}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition"
              >
                ✅ Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
