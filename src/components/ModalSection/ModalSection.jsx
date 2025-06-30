import { ModalSectionImages } from '@/utils/ImagesData'
import Image from 'next/image'
import React from 'react'
import CanvasSection from './CanvasSection'

const ModalSection = () => {
  return (
    <div className='max-w-[90vw] mx-auto my-8'>
      <h1 className='main-heading text-center'>Experience the 3D Difference</h1>
      <p className='my-2 text-center text-primaryText'>Unlock Your Creativity with Our Intuitive 3D Design Tool</p>


      <div className='flex md:flex-row flex-col md:justify-between items-start flex-wrap gap-2'>


        <div className="md:hidden w-full flex justify-center my-4">
          <section className='flex items-center gap-2'>
            <Image
              src={ModalSectionImages.chair1}
              alt='chair picture'
              width={60}
              height={60}
              className='w-[60px] h-[60px] object-cover'
            />
            <Image
              src={ModalSectionImages.chair2}
              alt='chair picture'
              width={60}
              height={60}
              className='w-[60px] h-[60px] object-cover'
            />
            <Image
              src={ModalSectionImages.chair3}
              alt='chair picture'
              width={60}
              height={60}
              className='w-[60px] h-[60px] object-cover'
            />
            <Image
              src={ModalSectionImages.chair4}
              alt='chair picture'
              width={60}
              height={60}
              className='w-[60px] h-[60px] object-cover'
            />
          </section>
        </div>




        <div className='hidden md:flex flex-col items-center my-4'>
          <section className='flex flex-col items-center my-2'>

            <p className='text-lg font-semibold'>Personalize Your Bed </p>
            <p className='font-normal text-primaryText leading-tighter tracking-tighter'>Bring Your Furniture <br />
              Visions to Life with </p>

            <Image
              src={ModalSectionImages.chair1}
              alt='chair picture'
              width={100}
              height={100}
              className='w-full w-[100px] h-[100px] object-cover my-4'
            />

          </section>

          <section className='flex flex-col items-center my-2'>

            <p className='text-lg font-semibold'>Personalize Your Sofa</p>
            <p className='font-normal text-primaryText leading-tighter tracking-tighter'>Transform Your Home with <br />
              Customizable 3D Furniture </p>

            <Image
              src={ModalSectionImages.chair2}
              alt='chair picture'
              width={100}
              height={100}
              className='w-full w-[100px] h-[100px] object-cover my-4'
            />

          </section>
        </div>

        <div className="rounded-full w-full md:w-[600px] md:h-[500px] h-[300px] flex justify-start items-center mx-auto">
          <CanvasSection />
        </div>

        <div className='hidden md:flex flex-col items-center my-4'>
          <section className='flex flex-col items-center my-2'>

            <p className='text-lg font-semibold'>Personalize Your Chair</p>
            <p className='font-normal text-primaryText leading-tighter tracking-tighter'>Elevate Your Space <br />
              with Personalized 3D </p>

            <Image
              src={ModalSectionImages.chair1}
              alt='chair picture'
              width={100}
              height={100}
              className='w-full w-[100px] h-[100px] object-cover my-4'
            />

          </section>

          <section className='flex flex-col items-center my-2'>

            <p className='text-lg font-semibold'>Personalize Your Table </p>
            <p className='font-normal text-primaryText leading-tighter tracking-tighter'>Experience the Power of <br />
              3D Furniture Design</p>

            <Image
              src={ModalSectionImages.chair1}
              alt='chair picture'
              width={100}
              height={100}
              className='w-full w-[100px] h-[100px] object-cover my-4'
            />

          </section>
        </div>

      </div>

    </div>
  )
}

export default ModalSection
