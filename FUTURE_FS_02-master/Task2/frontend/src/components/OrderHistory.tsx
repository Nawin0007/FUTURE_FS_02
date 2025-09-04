import React from 'react';
import { Package, Calendar, DollarSign } from 'lucide-react';
import { useAuthStore } from '../stores/authStore_old';

export const OrderHistory: React.FC = () => {
  const { orders, user } = useAuthStore();

  if (!user) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg font-medium">
          Please sign in to view your order history.
        </p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="h-14 w-14 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600 text-lg font-medium">No orders yet</p>
        <p className="text-gray-400 text-sm">
          Your order history will appear here after your first purchase.
        </p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      case 'processing':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'shipped':
        return 'bg-indigo-100 text-indigo-700 border border-indigo-200';
      case 'delivered':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-3">
        Order History
      </h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
        >
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
            <div className="flex items-center space-x-3">
              <Package className="h-6 w-6 text-indigo-500" />
              <span className="font-semibold text-gray-900 text-lg">
                Order #{order.id}
              </span>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>

            <div className="flex items-center space-x-5 mt-3 sm:mt-0 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span className="font-medium text-gray-700">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-100">
            {order.items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center py-3 space-x-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-xl border border-gray-200"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {quantity} × ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="font-medium text-gray-700">Order Total</span>
            <span className="text-lg font-bold text-indigo-600">
              ${order.total.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
