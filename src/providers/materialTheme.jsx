'use client';

import { createTheme } from '@mui/material/styles';

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#B2A191',  // Example primary color
    },
    text: {
      primary: '#ffffff', // White text by default
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: 'white',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#b2a191',
        },
      },
    },
    // Add global Button / Typography / etc overrides here if needed
  },
});

export default materialTheme;