import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { OrderHistory } from "./components/OrderHistory";
import { useAuthStore } from "./stores/authStore";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
          <Route
            path="/orders"
            element={user ? <OrderHistory /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </main>

      {/* Modals */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => setIsCheckoutOpen(true)}
      />
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}

export default App;
