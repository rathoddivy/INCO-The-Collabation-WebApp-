import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('brand'); // default value
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sign | Inco';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/login', {  // Change '/create' to '/login'
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }), // Send 'name' as well
      });

      const data = await res.json();
      if (res.status === 201) {
        alert(data.message || "Registered Successfully");
        navigate('/login'); // redirect to login page
      }
      


    } catch (error) {
      console.error('Register error:', error);
      alert('Register failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)} // Add name input field
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <select
            required
            className="w-full p-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="brand">Brand</option>
            <option value="influencer">Influencer</option>
          </select>

          <button type="submit" className="w-full p-2 bg-indigo-600 text-white rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
