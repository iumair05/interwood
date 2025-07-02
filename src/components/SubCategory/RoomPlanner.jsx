import CustomButton from '@/commons/CustomButton'
import { exploreSubCategoriesImages } from '@/utils/ImagesData'
import Image from 'next/image'
import React from 'react'

const RoomPlanner = () => {
  return (
    <>

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

    </>
  )
}

export default RoomPlanner
