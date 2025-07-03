'use client'

import Image from 'next/image'
import { Rating, Chip, Button } from '@mui/material'
import OutlineButton from '@/commons/OutlineButton'
import CustomButton from '@/commons/CustomButton'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/CartSlice'

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const router = useRouter()
  const params = useParams()
  
  useEffect(() => {
    console.log('Route params:', params)
    if (params.subCategoryId && params.subCategoryProducts) {
      console.log('subCategoryId:', params.subCategoryId)
      console.log('subCategoryProducts:', params.subCategoryProducts)
    }
  }, [params])

  const chipColor =
    product.badge === 'New'
      ? 'warning'
      : product.badge === 'Best Seller'
      ? 'success'
      : 'default'

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const handleProductDetails = () => {
    router.push(`/explore-category/${params.subCategoryId}/${params.subCategoryProducts}/${product.id}`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-60 object-cover bg-center bg-cover"
          priority
        />
        {product.badge && (
          <Chip
            label={product.badge}
            color={chipColor}
            size="small"
            sx={{ position: 'absolute', top: 12, right: 12, fontWeight: 600 }}
          />
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

        <div className="flex items-center gap-1 mb-2">
          <Rating value={product.rating} precision={0.5} readOnly size="small" />
          <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <CustomButton
            text="Add to Cart"
            onClick={handleAddToCart}
          />

          <OutlineButton
            onClick={handleProductDetails}
            text="View Details"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
