'use client';

import CustomButton from '@/commons/CustomButton';
import { ExploreOfficeImages } from '@/utils/ImagesData';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OfficeCollection = () => {
    
    const exploreRoute = '/explore-office'; 
    
    return (
        <section className="bg-[#FAF0E8] py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">

                {/* Left Side Image */}
                <Box className="w-full relative md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src={ExploreOfficeImages.OfficeCollection}
                        alt="Modern wooden bed with upholstered headboard"
                        fill
                        className="object-cover"
                        priority
                    />
                </Box>

                {/* Right Side Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        Elegant <br className='md:block hidden' /> Office
                    </h2>

                    <p className="mt-4 text-gray-700 md:max-w-lg w-full text-sm leading-relaxed">
                        Discover the perfect balance of form and function with our premium office furniture.
                        Crafted with attention to detail, our pieces will elevate your space and provide
                        unparalleled style and comfort.
                    </p>

                    <Link href={exploreRoute} passHref>
                        <CustomButton
                            text="Explore Now"
                            className='mt-6'
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default OfficeCollection;