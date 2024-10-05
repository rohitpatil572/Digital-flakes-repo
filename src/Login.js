import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true); // Set loading state

    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token); // Store the token in local storage
      alert('Login successful!'); // Alert for successful login
      navigate('/admin'); // Redirect to admin page
    } catch (error) {
      alert('Login failed. Please check your credentials.'); // Alert for failed login
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group d-flex flex-column justify-content-between">
        <div className='d-flex flex-row justify-content-center mt-3 mb-3'>
          <img className='img-logo' src="https://s3-alpha-sig.figma.com/img/d761/c44f/321741d69c0a3f8dee89b594a0a71974?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZQGrbCyaOuEEd1LuoZXL8EQVgCq7G3WATrZW25ltxH4JaIMdpK8n1mVEzWDF5cizEcSC6iGME2y9r8zi3jFEaxeNYmGmyI2FIPJXQkSpg1VvPZxEpIJwYr5xwlFuIWDREKqUq6gChw6oP8KsbEJtbeF0a2s6FICIhv8H1B3Nnn5Yn7Ic0jDgQJC-F3b3mR7xRZvR16Q6uuI3c9b5R1BLZyEFgIGvE788NhuKjJ6AiMmHHUgHltKWr5fctZIlWapRpPTXSa2gWKVOVUpmsZV9bFd6C2eohmB7aiUBDWG24bpagHycvvpd9TBRyX-J9Xa7rlmRYe-LIULaEZkhH5tJfA__" alt="Digital Flake logo" />
        </div>
        <p className='text-center'>Welcome to Digitalflake admin</p>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <p className='txt-forgot mt-2' onClick={() => navigate('/reset')}>
        Forgot Password?
      </p>
      <button type="submit" className="btn btn-primary btn-submit mt-4" disabled={loading}>
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
}

export default Login;
