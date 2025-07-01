'use client';

import React from 'react';
import Image from 'next/image';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRequestHomeCategories } from '@/api/user';
import { Loading } from '@/commons/Loading';

const HomeCategories = () => {

    const { data, isLoading, isError } = useRequestHomeCategories("Home");

    if (isError) return <div>Failed to load categories.</div>;

    const categories = data?.data || [];

    return (
        <div className="custom-container">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                Home Categories
            </h2>
            {isLoading ? (
                <div className='flex justify-center h-[300px]'>
                    <Loading />
                </div>
            ) : (
                categories.map((category) => (
                    <div key={category.id} className="mb-10">

                        {/* Subcategories */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {category.subcategories.map((subcategory) => (
                                <div
                                    key={subcategory.id}
                                    className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition duration-200 cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-[220px]">
                                        <Image
                                            src={subcategory.image}
                                            alt={subcategory.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Name and Arrow */}
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[#222] font-medium">{subcategory.name}</span>
                                        <ArrowForwardIcon className="text-gray-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )
            }

        </div>
    );
};

export default HomeCategories;
