import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../app';
import LoginForm from '../components/LoginForm';
import SuccessAlert from '../atom/Alerts/SuccessAlert/SuccessAlert';


export const LoginPage = () => {
  const [token, setToken] = useContext(TokenContext);
  const [loginSuccessful, setLoginSuccessful] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccessful) {
      const timer = setTimeout(() => {
        navigate('/todo');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [loginSuccessful, navigate]);

  const handleLoginSuccess = (token) => {
    setToken(token);
    setLoginSuccessful(true); 
  };

  const handleLoginError = (errorMessage) => {
    console.log("error")
  };

  return (
    <div>
      <h1>Login</h1>
      {loginSuccessful && <SuccessAlert message="You have successfully logged in!" />}
      <LoginForm onLoginSuccess={handleLoginSuccess}  onLoginError={handleLoginError} />
    </div>
  );
};
