'use client';

import { useRequestSubCategoriesChild } from '@/api/user';
import { Loading } from '@/commons/Loading';
import HeroPage from '@/commons/PageHero';
import RoomDecoration from '@/components/SubCategory/RoomDecoration';
import RoomPlanner from '@/components/SubCategory/RoomPlanner';
import { exploreSubCategoriesImages } from '@/utils/ImagesData';
import Image from 'next/image';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { routes } from '@/utils/routes';

const SubCategoryPage = () => {

    const router = useRouter();
    const params = useParams();

    const subCategoryId = params?.subCategoryId;

    const { data, isLoading } = useRequestSubCategoriesChild(subCategoryId);
    const subcategories = data?.data || {};

    console.log("subcategories--", subcategories)

    return (
        <div>
            {/* Hero Section */}
            <HeroPage
                imageUrl={exploreSubCategoriesImages.subCategoryImg}
                title={<>Everything for Your home <br /> in one Place</>}
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

                {/* Loading State */}
                {isLoading ? (
                    <div className="flex justify-center h-[300px]">
                        <Loading />
                    </div>
                ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {subcategories?.subcategories_child.length > 0 ? (
                                subcategories?.subcategories_child.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                                >
                                    <div className="relative w-full h-48">
                                        <Image
                                                src={cat.image || '/placeholder.jpg'}
                                            alt={cat.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-base font-medium text-[#333] mb-2">
                                            {cat.name}
                                        </h3>
                                            <button
                                                className="text-sm text-[#7c5e3c] font-semibold hover:underline"
                                                onClick={() =>
                                                    router.push(`${routes.exploreCategory}/${subCategoryId}/${cat.id}`)
                                                }
                                            >
                                            View Collection →
                                        </button>
                                    </div>
                                </div>
                                ))
                            ) : (
                                <p className="text-center col-span-full">No items found.</p>
                            )}
                        </div>
                )}

                {/* Static Components */}
                <RoomDecoration />
                <RoomPlanner />
            </div>
        </div>
    );
};

export default SubCategoryPage;
