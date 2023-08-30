import React from 'react';



const ErrorAlert = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative transition duration-300 ease-in-out transform hover:scale-105">
      <strong className="font-bold md:mr-2">Error!</strong>
      <span className="block mt-2 md:mt-0 md:inline"> {message}</span>
    </div>
  );
};

export default ErrorAlert;
