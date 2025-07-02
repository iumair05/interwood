'use client';

import React from 'react';

const OutlineButton = ({
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
        className={`border-2 border-gray-500 cursor-pointer text-gray-500 px-6 py-2 rounded shadow transition duration-300 ${className}`}
        {...props}
      >
        {text}
      </button>
    </>
  );
};

export default OutlineButton;
