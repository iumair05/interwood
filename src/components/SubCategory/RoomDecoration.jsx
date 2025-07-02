import { roomInspirationImages } from '@/utils/ImagesData';
import Image from 'next/image';
import React from 'react'

const RoomDecoration = ({subCategory}) => {

    console.log(subCategory)
    return (
        <>
            <h2 className="main-heading text-center mt-10 mb-2">
                Find Your {subCategory?.name} Style
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
        </>
    )
}

export default RoomDecoration;
