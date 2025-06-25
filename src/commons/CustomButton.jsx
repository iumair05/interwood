'use client';

import React from 'react';
import { Button } from "@mui/material";

const CustomButton = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  color = "primary",
  fullWidth = true,
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      color={color}
      className={`${className}`}
      variant='contained'
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
