import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loading = () => {
  return (
    <Box className='flex justify-center items-center'>
      <CircularProgress className='text-primaryText'  />
    </Box>
  );
}
