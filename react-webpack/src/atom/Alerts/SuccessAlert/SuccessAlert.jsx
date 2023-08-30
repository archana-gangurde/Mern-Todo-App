import React, { useState, useEffect } from 'react';
import '../../../style/SuccessAlert.scss'

const SuccessAlert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);  // 3000ms = 3 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);  // Empty dependency array ensures this effect runs once when the component mounts

  if (!isVisible) {
    return null;  // Don't render the alert if it's not visible
  }

  return (
    <div className="success-alert" role="alert">
      <strong className="title">Success!</strong>
      <span className="message"> {message}</span>
    </div>
  );
};

export default SuccessAlert;
