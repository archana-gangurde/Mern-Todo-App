import React from 'react';
import './ButtonStyle.scss'

const Button = ({ text, type = 'button', onClick, className = '', ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="button"
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
