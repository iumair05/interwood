"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { productDetailImages } from "@/utils/ImagesData";
import CustomButton from "@/commons/CustomButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRequestProductDetails } from "@/api/user";
import { useParams } from "next/navigation";
import { Loading } from "@/commons/Loading";
import StarIcon from '@mui/icons-material/Star';
import { addToCart } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'text-yellow-400'
              : star - 0.5 <= rating
              ? 'text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const ProductPage = () => {

  const dispatch = useDispatch();

  const params = useParams();
  const subCategoryProducts = params.productDetail;
  const { data, isLoading } = useRequestProductDetails(subCategoryProducts);
  const [selectedImage, setSelectedImage] = useState(0);

  const topProducts = [
    {
      id: 1,
      name: 'Garden Plus 3 Garden Sofa',
      image: productDetailImages.firstImage,
      rating: 4.5,
      reviews: 145,
      price: '$450',
      discount: '20% OFF',
    },
    {
      id: 2,
      name: 'Handwoven Basket With Handles',
      image: productDetailImages.secondImage,
      rating: 4.7,
      reviews: 98,
      price: '$120',
      discount: '15% OFF',
    },
    {
      id: 3,
      name: 'Modern Round Woven Plant Pot',
      image: productDetailImages.thirdImage,
      rating: 4.3,
      reviews: 76,
      price: '$85',
      discount: '10% OFF',
    },
  ];
  
  if (isLoading) {
    return <div className="bg-[#fdf6f0] min-h-screen py-8 px-4 font-sans"><Loading /></div>;
  }

  const product = data?.data || {};
  const mainImage = product.thumnail || productDetailImages.mainImage;
  const additionalImages = product.images_urls?.length > 0
    ? product.images_urls
    : [
      productDetailImages.firstImage,
      productDetailImages.secondImage,
      productDetailImages.thirdImage,
      productDetailImages.fourthImage
    ];

  const allImages = [mainImage, ...additionalImages];

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  // Calculate average rating from reviews
  const averageRating = product.reviews?.length > 0 
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
    : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }


  return (
    <div className="bg-[#fdf6f0] min-h-screen py-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Images */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-gray-200">
            <div className="w-full h-[400px] rounded-xl overflow-hidden mb-4">
              <Image
                src={allImages[selectedImage]}
                alt={product.name || "Product"}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex space-x-2">
              {allImages.slice(0, 5).map((img, i) => (
                <div
                  key={i}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${selectedImage === i ? "border-red-500" : "border-transparent hover:border-gray-300"
                    }`}
                  onClick={() => handleThumbnailClick(i)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            {product.reviews?.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Image
                      src={productDetailImages.profileImage}
                      width={40}
                      height={40}
                      alt="Reviewer"
                      className="rounded-full w-10 h-10 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{review.userName || "Anonymous"}</p>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {review.description || "No review text provided."}
                  </p>
                  {review.images?.length > 0 && (
                    <div className="flex space-x-2 overflow-x-auto">
                      {review.images.map((img, i) => (
                        <div key={i} className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={img}
                            width={100}
                            height={100}
                            alt={`Review ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No reviews yet. Be the first to review!</p>
              </div>
            )}

            {/* Pagination - Static as it's not in API */}
            <div className="flex justify-center space-x-2 mt-4">
              <button className="px-3 py-1 border rounded bg-white">Prev</button>
              <button className="px-3 py-1 border rounded bg-white">1</button>
              <button className="px-3 py-1 border rounded bg-white">2</button>
              <button className="px-3 py-1 border rounded bg-white">3</button>
              <button className="px-3 py-1 border rounded bg-white">Next</button>
            </div>
          </div>

        </div>

        {/* Right Column - Product Details */}
        <div className="lg:col-span-1 space-y-6">
          {/* Product Info */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              {product.name || "Product Name"}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <StarRating rating={averageRating} />
              <span className="text-sm text-gray-600">
                {averageRating.toFixed(1)} ({product.reviews?.length || 0} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-700 mb-4">
              ${product.price ? product.price.toLocaleString() : "0"}
            </p>
            <p className="text-gray-600 mb-6">
              {product.description || "No description available."}
            </p>

            {/* Size Selection */}
            {product.size?.length > 0 && (
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-bold text-gray-700 mb-2">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {product.size.map((size, i) => (
                      <button
                        key={i}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Color & Quantity - Static as not in API */}
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-bold text-gray-700 mb-2">Color: Beige</p>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full border-2 border-black bg-[#d6c2a1]" />
                  <button className="w-8 h-8 rounded-full border bg-gray-300" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold">Quantity:</span>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-16 border rounded px-2 py-1 text-sm"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <CustomButton onClick={handleAddToCart} text="Add to Cart" className="flex-1 py-3" />
              <button className="flex items-center justify-center gap-2 p-4 border border-gray-300 rounded hover:bg-gray-100 w-12">
                <FavoriteBorderIcon className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="font-semibold text-xl mb-4">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Cover Material</h3>
                <p className="text-gray-600">{product.cover_material || "Not specified"}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Frame Material</h3>
                <p className="text-gray-600">{product.frame_material || "Not specified"}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Frame Color</h3>
                <p className="text-gray-600">{product.frame_color || "Not specified"}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Warranty</h3>
                <p className="text-gray-600">2 Years</p>
              </div>
            </div>

            <h2 className="font-semibold text-xl mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features?.length > 0 ? (
                product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">{feature}</p>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">High-quality materials</p>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">Durable construction</p>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">Easy to assemble</p>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Shipping & Returns - Static as not in API */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="font-semibold text-xl mb-4">Shipping & Returns</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Shipping</h3>
                <p className="text-gray-600">Free delivery within 3-5 days</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Returns</h3>
                <p className="text-gray-600">30-day return policy</p>
                <p className="text-gray-600">2-year warranty included</p>
              </div>
            </div>
          </div>

          {/* Related Products - Static as not in API */}
          <div className="bg-white border border-gray-200 p-4 rounded-2xl w-full max-w-md">
            <h2 className="text-base font-semibold mb-4">Top Related Products</h2>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-start space-x-3">
                  <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden border">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{product.name}</p>
                    <div className="flex items-center space-x-1 mt-0.5">
                      <StarRating rating={product.rating} />
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm font-semibold text-red-500">
                        {product.price}
                      </span>
                      <span className="text-xs text-orange-500 bg-orange-100 px-1.5 py-0.5 rounded">
                        {product.discount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="w-full mt-4 text-center text-sm font-medium text-red-500 border border-red-500 rounded py-2 hover:bg-red-50 transition"
            >
              View All Top Rated
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;