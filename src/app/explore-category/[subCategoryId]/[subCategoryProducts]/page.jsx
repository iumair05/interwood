'use client'

import HeroPage from '@/commons/PageHero'        
import ProductCard from '@/components/ProductCard'
import { sofaProducts } from '@/utils/data'
import {exploreSubCategoriesImages} from '@/utils/ImagesData'

const SubCategoryProductPage = ({ params }) => {
  const { subCategoryProducts } = params    
  console.log("subCategoryProducts--", subCategoryProducts)
  return (
    <div className="pb-20">
      <HeroPage
        imageUrl={exploreSubCategoriesImages.subCategoryImg}       
        title={<>Explore Our Sofa Collection</>}
        description="Comfort meets style — find the perfect sofa to suit your space."
      />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sofaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SubCategoryProductPage
