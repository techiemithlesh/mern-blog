import React from 'react';
import './Style.css';


function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
