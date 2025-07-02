"use client";
import { useRequestSubCategoriesChild } from '@/api/user';
import CustomButton from '@/commons/CustomButton';
import { Loading } from '@/commons/Loading';
import HeroPage from '@/commons/PageHero';
import { exploreSubCategoriesImages, roomInspirationImages } from '@/utils/ImagesData';
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation';

const SubCategoryPage = ({ params }) => {
    const router = useRouter();
    const { subCategoryId } = params;

    console.log("subCategoryId--", subCategoryId);

    const { data, isLoading, isError } = useRequestSubCategoriesChild(subCategoryId);

    console.log("SubCategory API Response:", data);

    if (isLoading) return <Loading />;
    if (isError) return <p className="text-red-500">Failed to load subcategories.</p>;

    const subcategories = data?.data?.subcategories_child || [];

    return (
        <div>
            <HeroPage
                imageUrl={exploreSubCategoriesImages.subCategoryImg}
                title={<>Everything for Your Living <br /> Room, in one Place</>}
                description="From sofas to shelves - explore all the essentials to create your perfect space."
            />

            {/* section 1 */}
            <div className="custom-container">

                <h2 className="main-heading text-center mb-4">
                    Explore Living Room Furniture
                </h2>

                <p className="text-primaryText text-center mb-10">
                    Discover our curated selection of living room furniture designed to bring comfort,
                    style, and functionality to your home.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {subcategories.map((cat) => (
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
                                <button className="text-sm text-[#7c5e3c] font-semibold hover:underline" onClick={() => router.push(`/explore-category/${subCategoryId}/${cat.id}`)}>
                                    View Collection →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                <h2 className="main-heading text-center mt-10 mb-2">
                    Find Your Living Room Style
                </h2>

                <p className="text-primaryText text-center">
                    Get inspired by our curated room collections and discover how to bring your vision
                    to life
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="relative rounded-xl overflow-hidden shadow-sm group">
                        <Image
                            src={roomInspirationImages.room1}
                            alt="Scandinavian Simplicity"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>
                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-semibold text-white">
                                Scandinavian Simplicity
                            </h3>
                            <p className="mt-1 text-sm text-white">
                                Clean lines, light woods, and a neutral palette
                            </p>
                            <button className="mt-3 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded">
                                Shop the Look
                            </button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="relative rounded-xl overflow-hidden shadow-sm group">
                        <Image
                            src={roomInspirationImages.room2}
                            alt="Mid-Century Modern"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>
                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-semibold text-white">
                                Mid-Century Modern
                            </h3>
                            <p className="mt-1 text-sm text-white">
                                Timeless design with retro influences
                            </p>
                            <button className="mt-3 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded">
                                Shop the Look
                            </button>
                        </div>
                    </div>
                </div>


                <section className='my-10 px-20 flex flex-col md:flex-row items-center justify-center gap-10'>

                    <div className="max-w-xl">
                        <h2 className="main-heading">
                            Need Help Designing Your <br /> Space?
                        </h2>
                        <p className="text-primaryText my-6">
                            Our 3D Room Planner lets you visualize how our furniture will look in
                            your home before you buy. Try different layouts, colors, and
                            combinations to find your perfect match.
                        </p>
                        <CustomButton text="Try Our 3D Room Planner" />
                    </div>

                    <div className=" rounded-lg p-4">
                        <div className="relative rounded overflow-hidden border">
                            <Image
                                src={exploreSubCategoriesImages.roomPlannerImage}
                                alt="3D Room"
                                width={400}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default SubCategoryPage;
