import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // fake login
    localStorage.setItem("token", "demo-token");
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

      <label className="block mb-2 text-sm">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        placeholder="you@example.com"
        required
      />

      <label className="block mb-2 text-sm">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        placeholder="********"
        required
      />

      <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" type="submit">
        Sign in
      </button>
    </form>
  );
}
