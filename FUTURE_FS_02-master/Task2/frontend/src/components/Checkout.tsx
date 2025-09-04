import React, { useState } from 'react';
import { X, CreditCard, MapPin, Package } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore_old';
import { ShippingAddress, Order } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData extends ShippingAddress {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
}

export const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const { items, getTotal, clearCart } = useCartStore();
  const { user, addOrder } = useAuthStore();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  if (!isOpen) return null;

  const subtotal = getTotal();
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  const onSubmit = async (data: FormData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const order: Order = {
      id: Date.now().toString(),
      userId: user?.id || 'guest',
      items: [...items],
      total,
      shippingAddress: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        city: data.city,
        zipCode: data.zipCode,
        country: data.country
      },
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    if (user) {
      addOrder(order);
    }
    
    clearCart();
    setOrderComplete(true);
    setIsProcessing(false);
  };

  const handleClose = () => {
    onClose();
    setCurrentStep(1);
    setOrderComplete(false);
    reset();
  };

  if (orderComplete) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. You'll receive a confirmation email shortly.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-center space-x-8">
              {[
                { step: 1, label: 'Shipping', icon: MapPin },
                { step: 2, label: 'Payment', icon: CreditCard }
              ].map(({ step, label, icon: Icon }) => (
                <div key={step} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className={`text-sm font-medium ${
                    currentStep >= step ? 'text-indigo-600' : 'text-gray-500'
                  }`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.firstName ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.lastName ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    {...register('address', { required: 'Address is required' })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.address ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-red-600 text-sm">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.city ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-red-600 text-sm">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      {...register('zipCode', { 
                        required: 'ZIP code is required',
                        pattern: {
                          value: /^\d{5}(-\d{4})?$/,
                          message: 'Please enter a valid ZIP code'
                        }
                      })}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.zipCode ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-red-600 text-sm">{errors.zipCode.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    {...register('country', { required: 'Country is required' })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.country ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                  </select>
                  {errors.country && (
                    <p className="mt-1 text-red-600 text-sm">{errors.country.message}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Holder Name
                  </label>
                  <input
                    {...register('cardHolder', { required: 'Card holder name is required' })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.cardHolder ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Name on card"
                  />
                  {errors.cardHolder && (
                    <p className="mt-1 text-red-600 text-sm">{errors.cardHolder.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    {...register('cardNumber', { 
                      required: 'Card number is required',
                      pattern: {
                        value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                        message: 'Please enter a valid card number (1234 5678 9012 3456)'
                      }
                    })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.cardNumber ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && (
                    <p className="mt-1 text-red-600 text-sm">{errors.cardNumber.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      {...register('expiryDate', { 
                        required: 'Expiry date is required',
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                          message: 'Please enter a valid expiry date (MM/YY)'
                        }
                      })}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.expiryDate ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && (
                      <p className="mt-1 text-red-600 text-sm">{errors.expiryDate.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      {...register('cvv', { 
                        required: 'CVV is required',
                        pattern: {
                          value: /^\d{3,4}$/,
                          message: 'Please enter a valid CVV'
                        }
                      })}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.cvv ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="123"
                    />
                    {errors.cvv && (
                      <p className="mt-1 text-red-600 text-sm">{errors.cvv.message}</p>
                    )}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition duration-150 ease-in-out"
                  >
                    Back
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`flex-1 py-3 rounded-lg font-medium transition duration-150 ease-in-out ${
                      isProcessing
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    } text-white`}
                  >
                    {isProcessing ? 'Processing...' : `Place Order ($${total.toFixed(2)})`}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};