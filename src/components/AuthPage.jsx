import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AuthPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFormType = queryParams.get('type') === 'register' ? false : true;
  const [isLogin, setIsLogin] = useState(initialFormType);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsLogin(initialFormType);
  }, [initialFormType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:5001/api/login' : 'http://localhost:5001/api/register';

    try {
      const response = await axios.post(url, formData);
      setMessage(response.data.message);
      if (isLogin && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      setMessage(isLogin ? 'Login failed' : 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#7D5A50]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
        <div className="mt-4 text-center">
          {isLogin ? (
            <p>
              Dont have an account?{' '}
              <button className="text-blue-500" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button className="text-blue-500" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
