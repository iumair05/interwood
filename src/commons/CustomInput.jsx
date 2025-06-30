'use client';
import React from 'react';
import TextField from '@mui/material/TextField';


export const CustomInput = ({ textColor, sx, ...props }) => {
  return (
    <TextField
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px',
          '& fieldset': {
            borderColor: '#B2A191',
          },
          '&:hover fieldset': {
            borderColor: '#B2A191',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#B2A191',
          },
          '& input::placeholder': {
            color: textColor || '#b2a191',
            opacity: 1,
          },
          '& input': {
            color: textColor || '#b2a191',
          },
        },
        ...sx,
      }}
    />
  );
};
