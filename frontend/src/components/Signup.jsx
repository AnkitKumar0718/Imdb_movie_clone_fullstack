import React, { useState } from 'react';
import Imdb_logo from '../assets/IMDB_Logo.png';
import { Link, useNavigate } from 'react-router-dom';
// Import axios to handle API requests
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle signup
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      // Make a POST request to the backend /signup endpoint
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        email,
        password
    }, {
        withCredentials: true // Make sure to send cookies with the request
    });
          
      if (response.data.success) {
        // Navigate to login page after successful signup
        navigate('/login');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during signup');
      alert(error.response?.data?.message || error.message);
    }
  }

  return (
    <div className='flex flex-col md:mt-0 mt-8 justify-center items-center mb-4'>
      <Link to='/'>
        <div className='mt-4'>
          <img className='md:w-[120px] md:h-[50px] w-[100px] h-[40px]' src={Imdb_logo} alt='IMDB Logo' />
        </div>
      </Link>
      <div className='border border-gray-400 rounded-lg mt-4 md:p-6 p-6 md:w-[360px] w-full max-w-xs sm:max-w-md'>
        <p className='text-black md:mt-[-8px] mt-[-8px] text-2xl md:text-3xl font-semibold text-center'>
          Create account
        </p>

        {/* Form Section */}
        <form className='w-full' onSubmit={handleSubmit}>
          {/* E-mail Field */}
          <div className='flex flex-col mt-4'>
            <label className='font-semibold mb-2' htmlFor='e-mail'>
              E-mail
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='px-2 border text-sm rounded border-gray-400 w-full h-[40px]'
              type='email'
              placeholder='Your e-mail'
              required
            />
          </div>

          {/* Password Field */}
          <div className='flex flex-col mt-2'>
            <label className='font-semibold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='px-2 border rounded border-gray-400 w-full h-[40px]'
              type='password'
              placeholder='Password'
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            className='bg-yellow-400 hover:bg-yellow-500 text-black mt-6 p-2 w-full rounded-xl text-sm md:text-base'
            type='submit'
          >
            Create an IMDb account
          </button>

          {/* Login Link */}
          <div className='mt-8 border-t border-gray-400 pt-4 text-center'></div>
          <Link to='/login'>
            <div className='flex justify-center mt-2 gap-2'>
              <p>Already a user?</p>
              <span className='underline text-blue-600'>Log in here</span>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
