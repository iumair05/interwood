"use client";
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const CustomMenu = ({ options = [], value, onChange }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleClose = (option) => {
    if (option && onChange) onChange(option);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
      >
        {value || 'Select an option'}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
