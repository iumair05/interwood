'use client';

import { useRequestSubCategoriesChild } from '@/api/user';
import { Loading } from '@/commons/Loading';
import HeroPage from '@/commons/PageHero';
import RoomDecoration from '@/components/SubCategory/RoomDecoration';
import RoomPlanner from '@/components/SubCategory/RoomPlanner';
import { exploreSubCategoriesImages } from '@/utils/ImagesData';
import Image from 'next/image';
import React from 'react';
import { useParams } from 'next/navigation';

const SubCategoryPage = () => {
    
    const params = useParams();
    const subCategoryId = params?.subCategoryId;

    const { data, isLoading } = useRequestSubCategoriesChild(subCategoryId);
    const subcategories = data?.data || {};

    return (
        <div>
            {/* Hero Section */}
            <HeroPage
                imageUrl={exploreSubCategoriesImages.subCategoryImg}
                title={`Everything for Your ${subcategories?.name}, in one Place`}
                description="From sofas to shelves - explore all the essentials to create your perfect space."
            />

            {/* Main Container */}
            <div className="custom-container">
                <h2 className="main-heading text-center mb-4">
                    Explore {subcategories?.name}
                </h2>

                <p className="text-primaryText text-center mb-10">
                    Discover our curated selection of living room furniture designed to bring comfort,
                    style, and functionality to your home.
                </p>

                {isLoading ? (
                    <div className="flex justify-center items-center h-[300px]">
                        <Loading />
                    </div>
                ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {subcategories?.subcategories_child?.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                                >
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-base font-medium text-[#333] mb-2">
                                            {cat.name}
                                        </h3>
                                        <button className="text-sm text-[#7c5e3c] font-semibold hover:underline">
                                            View Collection →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                )}

                {/* Static Components */}
                <RoomDecoration subCategory={subcategories} />
                <RoomPlanner />
            </div>
        </div>
    );
};

export default SubCategoryPage;
