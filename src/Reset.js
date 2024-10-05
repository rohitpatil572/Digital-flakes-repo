import React from 'react';
import { useNavigate } from 'react-router-dom';

function Reset() {
  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-end'>
      <div className='div-card'>
        <h1>Did you forget your password?</h1>
        <p>Enter your email address and we’ll send you a link to restore your password</p>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <button type="submit" className="btn btn-primary btn-submit mt-3">Request Reset link</button>
        <p className='back-login' onClick={() => navigate('/')}>Back to Login</p>
      </div>
    </div>
  );
}

export default Reset;
