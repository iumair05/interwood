'use client';

import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '@/commons/CustomButton';
import { CustomInput } from '@/commons/CustomInput';

export default function NewsletterSignup() {

  return (
    <div className="flex px-4 justify-center items-center py-12">
      <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-3xl w-full">
        <h2 className="main-heading">Join Our Newsletter</h2>
        <p className="text-primaryText">
          Subscribe to receive updates on new collections, special offers, and exclusive design tips.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-4">
          <CustomInput
            variant="outlined"
            placeholder="Enter your email address"
            size="small"
            fullWidth
          />

          <CustomButton text="Subscribe" />
        </div>

        <label className="flex items-center justify-center text-gray-500 text-xs cursor-pointer">
          <Checkbox
            size="small"
            sx={{
              color: '#B2A191',
              '&.Mui-checked': {
                color: '#B2A191',
              },
            }}
          />
          I agree to receive marketing emails and accept the Privacy Policy.
        </label>
      </div>
    </div>
  );
}
