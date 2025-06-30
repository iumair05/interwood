
import { homeCategories } from '@/utils/ImagesData';
import Image from 'next/image';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from 'react';

const HomeCategories = () => {

    const categories = [
        { img: homeCategories.figma1, name: 'Yellow' },
        { img: homeCategories.figma2, name: 'Blue Couch' },
        { img: homeCategories.figma3, name: 'Modern' },
        { img: homeCategories.figma4, name: 'Elegant' },
        { img: homeCategories.figma5, name: 'Sleek' },
        { img: homeCategories.figma6, name: 'Minimalist' },
    ];

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
                                src={category.img}
                                alt={category.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Name and Arrow */}
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-[#222] font-medium">{category.name}</span>
                            <ArrowForwardIcon className="text-gray-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCategories;
