import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login