import { Product } from '../types';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life.',
    price: 399.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/4316443/pexels-photo-4316443.jpeg',
    rating: 4.3,
    reviews: 512,
    inStock: true
  },
  {
    id: '4',
    name: 'Smartphone Pro Max',
    description: 'Latest flagship smartphone with triple camera system and 5G connectivity.',
    price: 1199.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    rating: 4.9,
    reviews: 2341,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with RTX graphics and 144Hz display.',
    price: 1899.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    rating: 4.7,
    reviews: 834,
    inStock: true
  },
  {
    id: '6',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    price: 79.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
    rating: 4.4,
    reviews: 623,
    inStock: true
  },
  {
    id: '7',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof speaker with 360-degree sound and 20-hour battery.',
    price: 149.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
    rating: 4.5,
    reviews: 756,
    inStock: true
  },
  {
    id: '8',
    name: '4K Webcam',
    description: 'Ultra HD webcam with auto-focus and noise-canceling microphone.',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
    rating: 4.2,
    reviews: 445,
    inStock: false
  },

  // Fashion
  {
    id: '9',
    name: 'Minimalist Backpack',
    description: 'Sleek and functional backpack perfect for work, travel, and everyday use.',
    price: 89.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    rating: 4.7,
    reviews: 634,
    inStock: true
  },
  {
    id: '10',
    name: 'Leather Wallet',
    description: 'Premium genuine leather wallet with RFID blocking technology.',
    price: 79.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    rating: 4.5,
    reviews: 756,
    inStock: false
  },
  {
    id: '11',
    name: 'Designer Sunglasses',
    description: 'Stylish polarized sunglasses with UV protection and premium frames.',
    price: 159.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    featured: true
  },
  {
    id: '12',
    name: 'Cotton T-Shirt',
    description: 'Soft organic cotton t-shirt available in multiple colors and sizes.',
    price: 29.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    rating: 4.3,
    reviews: 1234,
    inStock: true
  },
  {
    id: '13',
    name: 'Denim Jeans',
    description: 'Classic straight-fit jeans made from sustainable denim fabric.',
    price: 89.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    rating: 4.4,
    reviews: 567,
    inStock: true
  },
  {
    id: '14',
    name: 'Winter Jacket',
    description: 'Warm and waterproof winter jacket with down insulation.',
    price: 249.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    rating: 4.8,
    reviews: 423,
    inStock: true
  },
  {
    id: '15',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning technology.',
    price: 129.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    rating: 4.7,
    reviews: 1089,
    inStock: true,
    featured: true
  },
  {
    id: '16',
    name: 'Baseball Cap',
    description: 'Adjustable baseball cap made from breathable cotton twill.',
    price: 24.99,
    category: 'fashion',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg',
    rating: 4.2,
    reviews: 345,
    inStock: true
  },

  // Home & Garden
  {
    id: '17',
    name: 'Ceramic Coffee Mug Set',
    description: 'Handcrafted ceramic mugs perfect for your morning coffee. Set of 4.',
    price: 49.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg',
    rating: 4.9,
    reviews: 423,
    inStock: true,
    featured: true
  },
  {
    id: '18',
    name: 'Desk Organizer',
    description: 'Bamboo desk organizer to keep your workspace clean and organized.',
    price: 34.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg',
    rating: 4.4,
    reviews: 289,
    inStock: true
  },
  {
    id: '19',
    name: 'Scented Candle Collection',
    description: 'Set of 3 premium soy candles with relaxing lavender, vanilla, and eucalyptus scents.',
    price: 59.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg',
    rating: 4.8,
    reviews: 367,
    inStock: true
  },
  {
    id: '20',
    name: 'Indoor Plant Set',
    description: 'Collection of 3 low-maintenance indoor plants perfect for any room.',
    price: 79.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    rating: 4.6,
    reviews: 512,
    inStock: true
  },
  {
    id: '21',
    name: 'Kitchen Knife Set',
    description: 'Professional chef knife set with wooden block and sharpening steel.',
    price: 199.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg',
    rating: 4.7,
    reviews: 678,
    inStock: true
  },
  {
    id: '22',
    name: 'Throw Pillow Set',
    description: 'Set of 2 decorative throw pillows with removable covers.',
    price: 39.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    rating: 4.3,
    reviews: 234,
    inStock: true
  },
  {
    id: '23',
    name: 'Essential Oil Diffuser',
    description: 'Ultrasonic aromatherapy diffuser with LED lighting and timer function.',
    price: 69.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
    rating: 4.5,
    reviews: 445,
    inStock: true
  },
  {
    id: '24',
    name: 'Wall Art Print Set',
    description: 'Modern abstract art prints, set of 3 with frames included.',
    price: 89.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg',
    rating: 4.4,
    reviews: 356,
    inStock: true
  },

  // Books & Media
  {
    id: '25',
    name: 'Programming Fundamentals',
    description: 'Comprehensive guide to modern programming concepts and best practices.',
    price: 49.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    rating: 4.8,
    reviews: 1567,
    inStock: true,
    featured: true
  },
  {
    id: '26',
    name: 'Design Thinking Handbook',
    description: 'Learn the principles of user-centered design and creative problem solving.',
    price: 39.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    rating: 4.6,
    reviews: 789,
    inStock: true
  },
  {
    id: '27',
    name: 'Cookbook Collection',
    description: 'Set of 3 bestselling cookbooks featuring international cuisine.',
    price: 79.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/1927348/pexels-photo-1927348.jpeg',
    rating: 4.7,
    reviews: 445,
    inStock: true
  },
  {
    id: '28',
    name: 'Photography Guide',
    description: 'Master digital photography with this comprehensive visual guide.',
    price: 44.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    rating: 4.5,
    reviews: 623,
    inStock: true
  },

  // Sports & Fitness
  {
    id: '29',
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat with alignment guides and carrying strap.',
    price: 59.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg',
    rating: 4.6,
    reviews: 834,
    inStock: true
  },
  {
    id: '30',
    name: 'Resistance Band Set',
    description: 'Complete resistance band workout set with door anchor and guide.',
    price: 34.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg',
    rating: 4.4,
    reviews: 567,
    inStock: true
  },
  {
    id: '31',
    name: 'Water Bottle Insulated',
    description: 'Stainless steel water bottle that keeps drinks cold for 24 hours.',
    price: 29.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg',
    rating: 4.7,
    reviews: 1123,
    inStock: true,
    featured: true
  },
  {
    id: '32',
    name: 'Dumbbells Set',
    description: 'Adjustable dumbbell set with weight plates from 5-50 lbs.',
    price: 299.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg',
    rating: 4.8,
    reviews: 445,
    inStock: true
  },
  {
    id: '33',
    name: 'Tennis Racket',
    description: 'Professional tennis racket with carbon fiber frame and grip tape.',
    price: 189.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg',
    rating: 4.5,
    reviews: 234,
    inStock: true
  },
  {
    id: '34',
    name: 'Basketball',
    description: 'Official size basketball with superior grip and bounce.',
    price: 39.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
    rating: 4.3,
    reviews: 678,
    inStock: true
  },

  // Beauty & Personal Care
  {
    id: '35',
    name: 'Skincare Routine Set',
    description: 'Complete 4-step skincare routine with cleanser, toner, serum, and moisturizer.',
    price: 129.99,
    category: 'beauty',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    rating: 4.8,
    reviews: 1456,
    inStock: true,
    featured: true
  },
  {
    id: '36',
    name: 'Hair Styling Tool',
    description: 'Professional hair straightener and curler with ceramic plates.',
    price: 89.99,
    category: 'beauty',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    rating: 4.4,
    reviews: 567,
    inStock: true
  },
  {
    id: '37',
    name: 'Makeup Brush Set',
    description: 'Professional makeup brush set with 12 brushes and carrying case.',
    price: 69.99,
    category: 'beauty',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
    rating: 4.6,
    reviews: 789,
    inStock: true
  },
  {
    id: '38',
    name: 'Perfume Collection',
    description: 'Set of 3 signature fragrances in travel-size bottles.',
    price: 99.99,
    category: 'beauty',
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg',
    rating: 4.7,
    reviews: 445,
    inStock: true
  },

  // Toys & Games
  {
    id: '39',
    name: 'Board Game Classic',
    description: 'Strategic board game for 2-4 players, perfect for family game night.',
    price: 44.99,
    category: 'toys',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    rating: 4.5,
    reviews: 623,
    inStock: true
  },
  {
    id: '40',
    name: 'Building Blocks Set',
    description: 'Creative building set with 500+ pieces for endless construction fun.',
    price: 79.99,
    category: 'toys',
    image: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg',
    rating: 4.8,
    reviews: 1234,
    inStock: true,
    featured: true
  },
  {
    id: '41',
    name: 'Puzzle 1000 Pieces',
    description: 'Beautiful landscape puzzle with 1000 pieces for hours of entertainment.',
    price: 24.99,
    category: 'toys',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg',
    rating: 4.3,
    reviews: 345,
    inStock: true
  },
  {
    id: '42',
    name: 'Remote Control Car',
    description: 'High-speed RC car with rechargeable battery and remote control.',
    price: 149.99,
    category: 'toys',
    image: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg',
    rating: 4.6,
    reviews: 456,
    inStock: true
  },

  // Kitchen & Dining
  {
    id: '43',
    name: 'Coffee Maker Deluxe',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 199.99,
    category: 'kitchen',
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
    rating: 4.7,
    reviews: 789,
    inStock: true
  },
  {
    id: '44',
    name: 'Non-Stick Pan Set',
    description: 'Professional non-stick cookware set with heat-resistant handles.',
    price: 159.99,
    category: 'kitchen',
    image: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg',
    rating: 4.5,
    reviews: 623,
    inStock: true
  },
  {
    id: '45',
    name: 'Blender Pro',
    description: 'High-power blender perfect for smoothies, soups, and food processing.',
    price: 249.99,
    category: 'kitchen',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg',
    rating: 4.8,
    reviews: 567,
    inStock: true,
    featured: true
  },
  {
    id: '46',
    name: 'Dinner Plate Set',
    description: 'Elegant ceramic dinner plates, set of 6 with matching bowls.',
    price: 89.99,
    category: 'kitchen',
    image: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg',
    rating: 4.4,
    reviews: 345,
    inStock: true
  },
  {
    id: '47',
    name: 'Air Fryer',
    description: 'Compact air fryer for healthy cooking with little to no oil.',
    price: 129.99,
    category: 'kitchen',
    image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg',
    rating: 4.6,
    reviews: 892,
    inStock: true
  },
  {
    id: '48',
    name: 'Wine Glass Set',
    description: 'Crystal wine glasses, set of 4 for red and white wine.',
    price: 69.99,
    category: 'kitchen',
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
    rating: 4.5,
    reviews: 234,
    inStock: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Home & Garden' },
  { id: 'books', name: 'Books & Media' },
  { id: 'sports', name: 'Sports & Fitness' },
  { id: 'beauty', name: 'Beauty & Care' },
  { id: 'toys', name: 'Toys & Games' },
  { id: 'kitchen', name: 'Kitchen & Dining' }
];