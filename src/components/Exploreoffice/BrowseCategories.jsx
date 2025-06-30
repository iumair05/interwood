"use client";
import React from "react";
import { Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ExploreOfficeBrowseCategoryImages } from '@/utils/ImagesData'
import Image from "next/image";

const categories = [
  {
    title: "Living Room Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse1,
  },
  {
    title: "Bedroom Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse2,
  },
  {
    title: "Dining Room Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse3,
  },
  {
    title: "Home Office Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse4,
  },
  {
    title: "Entryway Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse5,
  },
  {
    title: "Kitchen Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse6,
  },
  {
    title: "Outdoor Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse7,
  },
  {
    title: "Kids & Teens Furniture",
    image: ExploreOfficeBrowseCategoryImages.Browse8,
  },
];

const BrowseCategories = () => {
  return (
    <div className="min-h-screen p-8 max-w-8xl mx-auto">
      <h2
        className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8"
      >
        Browse Categories
      </h2>
      
      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 0'
        }}
      >
        {categories.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4} 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg overflow-hidden w-full max-w-[400px] transition duration-200 cursor-pointer mt-5">
              {/* Image */}
              <div className="relative w-full h-70">
                <Image
                  src={category.image}
                  alt={category.title}
                  
                  className="object-cover "
                  width={350}
                  height={300}
                />
              </div>
              {/* Title and Arrow */}
              <div className="flex items-center justify-between px-4 py-3">
                <Typography
                  variant="body1"
                  className="text-[#222] font-medium"
                >
                  {category.title}
                </Typography>
                <ArrowForwardIcon className="text-gray-500" />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BrowseCategories;