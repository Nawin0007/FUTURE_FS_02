# Mini E-Commerce Platform

A modern, full-featured e-commerce platform built with **React, TypeScript, Tailwind CSS**, and a **Node.js + Express backend** with **MongoDB** for persistent storage.

---

## 🗄️ Data Storage

### Frontend (LocalStorage)
- **User Data**: Authentication state, user profiles, and preferences  
- **Cart Data**: Shopping cart items and quantities  
- **Order History**: Past orders and transaction records  

**Storage Locations:**
- `cart-storage`: Shopping cart state (managed by Zustand persist)  
- `auth-storage`: User authentication and order history (managed by Zustand persist)  

### Backend (MongoDB)
- **Users Collection**: Stores user profiles, hashed passwords, and authentication info  
- **Orders Collection**: Stores user orders and transaction history  
- **Authentication**: JWT tokens for secure session management  

**Backend Features:**
- User registration and login with JWT authentication  
- Password hashing using bcrypt  
- REST APIs for authentication and order management  
- CORS enabled for frontend communication  

---

## 🛠️ Tech Stack

**Frontend:** React, TypeScript, Tailwind CSS, Vite  
**Backend:** Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken, dotenv  
**State Management:** Zustand  
**Authentication:** JWT  

---

## 🛍️ Product Catalog

The platform includes **48 products** across **8 categories**:

### Categories:
1. **Electronics** – Headphones, smartphones, laptops, accessories  
2. **Fashion** – Clothing, shoes, accessories, bags  
3. **Home & Garden** – Decor, furniture, plants, organization  
4. **Books & Media** – Educational books, cookbooks, guides  
5. **Sports & Fitness** – Exercise equipment, outdoor gear  
6. **Beauty & Care** – Skincare, makeup, personal care  
7. **Toys & Games** – Board games, puzzles, building sets  
8. **Kitchen & Dining** – Appliances, cookware, tableware  

### Product Features:
- High-quality product images  
- Detailed descriptions and specifications  
- Customer ratings and review counts  
- Stock availability tracking  
- Featured product highlighting  
- Price range from $24.99 to $1,899.99  

---

## 🔧 Features

### Shopping Experience
- Product search and filtering  
- Category-based browsing  
- Sort by price, rating, or name  
- Responsive product grid  
- Shopping cart with quantity controls  
- Real-time price calculations  

### User Management
- User registration and login (backend-powered)  
- Form validation with error handling  
- Password visibility toggle  
- Persistent authentication state with JWT  

### Checkout Process
- Multi-step checkout flow  
- Shipping information collection  
- Payment form simulation  
- Order confirmation  
- Tax and shipping calculations  

### Order Management
- Order history tracking  
- Order status updates  
- Detailed order summaries  

---

## 🎨 Design Features
- Modern, clean interface with Apple-inspired aesthetics  
- Responsive design for all screen sizes  
- Smooth animations and micro-interactions  
- Professional color scheme with indigo primary  
- Accessible form validation and error states  

---

## 🚀 Getting Started

### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
2. Install dependencies:
    npm install
3. Create a .env file:
    PORT=5000
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-secret-key>
4. Run the backend server:
    node server.js
    Backend runs on: http://localhost:5000
## Frontend Setup

1. Navigate to frontend folder:
    cd frontend
2. Install dependencies:
    npm install
3. Start frontend:
    npm run dev
    Frontend runs on: http://localhost:5173 (or assigned port)
📁 Folder Structure
      backend/
      ├─ server.js
      ├─ models/
      │  └─ User.js
      └─ .env

      frontend/
      ├─ src/
      │  ├─ components/
      │  │  └─ Auth.tsx
      │  ├─ stores/
      │  │  ├─ authStore.ts
      │  │  └─ cartStore.ts
      │  └─ App.tsx
      └─ package.json
⚙️ Dependencies

Backend:
  express
  mongoose
  cors
  bcryptjs
  jsonwebtoken
  dotenv

Frontend:
  react
  react-dom
  tailwindcss
  vite
  lucide-react
  zustand

📝 Notes

Make sure MongoDB Atlas allows connections from your IP (0.0.0.0/0 for dev).

Replace <your-mongodb-connection-string> and <your-secret-key> in .env with actual values.

LocalStorage is used only for temporary frontend state; backend ensures persistence.

👤 Author

Nikhil Akkenapally
Full-stack developer | React & Node.js Enthusiast
