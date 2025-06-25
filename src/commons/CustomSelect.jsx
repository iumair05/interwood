// components/SelectBox.js
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomSelect = ({
  name,
  value,
  className = "",
  options = [],
  onChange,
  fullWidth = true,
  size = "medium",
  variant = "outlined",
}) => {
  return (
    <FormControl fullWidth={fullWidth} size={size} variant={variant}>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        className={`${className}`}
        size="small"
        placeholder="Select an option"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
