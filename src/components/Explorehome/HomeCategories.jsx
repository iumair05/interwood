import CustomButton from '@/commons/CustomButton';
import { homeCategories } from '@/utils/ImagesData';
import Image from 'next/image';
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
            <h1 className="main-heading mb-8">Browse Categories</h1>

            <div className="grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden bg-white shadow-md"
                    >
                        <div className="relative w-full h-[200px] overflow-hidden">
                            <Image
                                src={category.img}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                            />
                        </div>

                        <div className="flex justify-between items-center px-4 my-4">
                            <p className="font-semibold">{category.name}</p>
                            <p>{'->'}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Find your perfect Style */}

            <section className='flex flex-col bg-white p-6 justify-center items-center my-10 '>

                <h1 className='main-heading text-center'>Find Your Perfect Style</h1>

                <p className='text-center my-4'>Find stylish, functional pieces for every space in your home. Browse our full collection
                    today and transform your living spaces with our curated selection.</p>

                <CustomButton
                    className='mt-4'
                    text="Explore All Categories"
                />

            </section>
        </div>
    );
};

export default HomeCategories;
