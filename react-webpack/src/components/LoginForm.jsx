import React, { useState } from 'react';
import loginRequest from '../api/loginRequest';
import '../style/LoginForm.scss';
import Button from '../atom/Button/Button';

const LoginForm = ({ onLoginSuccess, onLoginError }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(password)
      .then(({ token }) => {
        onLoginSuccess(token);
      })
      .catch((err) => {
        setError(err.message);
        onLoginError(err.message);
      });
  };

  return (
    <div className="login-form">
      <div className="error-message">{error}</div>
      <form onSubmit={handleLogin}>
        <input
        placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" type="submit" /> 
      </form>
    </div>
  );
};

export default LoginForm;
