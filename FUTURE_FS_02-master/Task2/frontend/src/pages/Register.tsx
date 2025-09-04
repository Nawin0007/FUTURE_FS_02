import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import type { AuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const register = useAuthStore((state: AuthStore) => state.register);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      // Basic validation
      if (password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
      }
      if (!email.includes('@')) {
        setError("Please enter a valid email address");
        return;
      }
      if (name.length < 2) {
        setError("Name must be at least 2 characters long");
        return;
      }

      await register(email, password, name);
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-3"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3"
          required
        />
        {error && (
          <div className="text-red-500 text-sm mb-3">{error}</div>
        )}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}
