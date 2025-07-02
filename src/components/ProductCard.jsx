'use client'

import Image from 'next/image'
import { Rating, Chip, Button } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import CustomButton from '@/commons/CustomButton'

const ProductCard = ({ product }) => {
  const chipColor =
    product.badge === 'New'
      ? 'warning'
      : product.badge === 'Best Seller'
      ? 'success'
      : 'default'

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={640}
          height={400}
          className="h-60 w-full object-cover"
          priority
        />
        {product.badge && (
          <Chip
            label={product.badge}
            color={chipColor}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              fontWeight: 600,
            }}
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
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
            startIcon={<ShoppingCartOutlinedIcon />}
            fullWidth
          />

          <CustomButton
            text="View Details"
            startIcon={<VisibilityOutlinedIcon />}
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard