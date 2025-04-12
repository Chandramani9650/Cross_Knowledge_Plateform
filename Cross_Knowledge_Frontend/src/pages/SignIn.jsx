import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log('Login successful:', data);
        alert("Login successful!");
        navigate('/');
        // You can store token or redirect user here
      } else {
        console.error('Login failed:', data.message);
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("http://localhost:8000/api/auth/signin", formData, {
  //       withCredentials: true
  //     });

  //     console.log(res.data);
  //     alert("Login Successful");
  //   } catch (err) {
  //     console.error(err.response?.data);
  //     alert(err.response?.data.message || "Login failed");
  //   }
  // };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl mb-4 text-start">SIGN <span className='text-gray-700 font-semibold text-xl mb-4'>IN</span></h2>

      <form onSubmit={handleLogin}>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-sm text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
