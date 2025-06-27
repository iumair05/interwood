'use client';

import React from 'react';

const CustomButton = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`bg-[#B2A191] hover:opacity-90 cursor-pointer text-white px-6 py-2 rounded shadow transition duration-300 ${className}`}
        {...props}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButton;
