export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  shippingAddress: ShippingAddress;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}