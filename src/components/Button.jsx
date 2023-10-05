import React from "react";

const Button = ({ children, className, type, value }) => {
  return (
    <button
      className={`bg-[#379ae0] px-3 py-2 rounded-md text-white mr-3 hover:bg-gray-600 duration-300 ${className}`}
      type={type}
    >
      {children}
      {value}
    </button>
  );
};

export default Button;
