"use client";
import React from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { exploreOfficeBrowseCategoryImages } from "@/utils/ImagesData";

const categories = [
  { title: "Living Room Furniture", image: exploreOfficeBrowseCategoryImages.Browse1 },
  { title: "Bedroom Furniture", image: exploreOfficeBrowseCategoryImages.Browse2 },
  { title: "Dining Room Furniture", image: exploreOfficeBrowseCategoryImages.Browse3 },
  { title: "Home Office Furniture", image: exploreOfficeBrowseCategoryImages.Browse4 },
  { title: "Entryway Furniture", image: exploreOfficeBrowseCategoryImages.Browse5 },
  { title: "Kitchen Furniture", image: exploreOfficeBrowseCategoryImages.Browse6 },
];

const OfficeCategories = () => {
  return (
    <div className="custom-container">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
        Browse Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition duration-200 cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-[220px]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title and Arrow */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[#222] font-medium">{category.title}</span>
              <ArrowForwardIcon className="text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeCategories;
