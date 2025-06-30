"use client";
import React from "react";
import { Button, Container, Typography } from "@mui/material";

const FindYourStyle = () => {
  return (
    <div className="py-4 flex justify-center">
      <Container
        className="bg-white rounded-xl shadow-md p-8 text-center !max-w-3xl"
      >
        <Typography
          variant="h4"
          component="h2"
          className="!font-serif !font-bold !mb-4"
        >
          Find Your Perfect Style
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 !mb-6"
        >
          Find stylish, functional pieces for every space in your home. Browse our full collection today and transform your living spaces with our curated selection.
        </Typography>
        <Button
          variant="contained"
          className="!bg-[#A1866F] !hover:bg-[#8b6f5b] !text-white !rounded-full !px-6 !py-2 capitalize"
        >
          Explore All Categories
        </Button>
      </Container>
    </div>
  );
};

export default FindYourStyle;
