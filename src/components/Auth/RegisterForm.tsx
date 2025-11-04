import React, { useState } from "react";
import { Input, Button, message } from 'antd';
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fbLoading, setFbLoading] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // fake register: you might want to call an API here
    // For now just save a demo token and redirect to home
    localStorage.setItem("token", "demo-token");
    navigate("/", { replace: true });
  };

  return (
    <form className="p-6 rounded-xl w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>

      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        placeholder="Your full name"
        required
      />

      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        placeholder="you@example.com"
        required
      />

      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        placeholder="********"
        required
      />

      <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" type="submit">
        Create account
      </button>

      <div className="mt-3">
        <Button block type="primary" loading={fbLoading} style={{ background: '#1877f2', borderColor: '#1877f2' }}>
          Continue with Facebook
        </Button>
      </div>
    </form>
  );
}
