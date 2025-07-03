'use client';

import { useRequestSubCategoryChildProducts } from '@/api/user';
import { Loading } from '@/commons/Loading';
import HeroPage from '@/commons/PageHero';
import ProductCard from '@/components/ProductCard';
import { exploreSubCategoriesImages } from '@/utils/ImagesData';
import { useParams } from 'next/navigation';

const SubCategoryProductPage = () => {

  const params = useParams();
  
  const { subCategoryProducts } = params;

  const { data, isLoading } = useRequestSubCategoryChildProducts(subCategoryProducts);

  console.log('data---', data);

  const products = data?.data?.products || [];

  return (
    <div>
      <HeroPage
        imageUrl={exploreSubCategoriesImages.subCategoryImg}
        title={<>Explore Our Sofa Collection</>}
        description="Comfort meets style — find the perfect sofa to suit your space."
      />

      <section className="custom-container">
        {isLoading ? (
          <div className="flex justify-center h-[300px]">
            <Loading />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-500 py-20 text-lg">
            Product not available
          </div>
        ) : (
          <div className="grid gap-8 mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name,
                      image: product.thumnail,
                      price: product.price,
                      rating: 4.5,          // Static placeholder
                      reviews: 120,          // Static placeholder
                      oldPrice: product.price + 2000,  // Fake old price
                      badge: 'New',          // Static badge
                    }}
                  />
                ))}
              </div>
        )}
      </section>
    </div>
  );
};

export default SubCategoryProductPage;
