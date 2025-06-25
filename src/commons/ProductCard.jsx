import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Stack } from '@mui/material';

const ProductCard = ({
    image = "/images/cardImage.jpg",
    title = "Urban Sofa Set",
    originalPrice = "Rs. 56,500",
    discountedPrice = "Rs. 45,200",
}) => {
  return (
    <Card sx={{ maxWidth: 300, position: 'relative', borderRadius: 2 }}>
     

      {/* Product Image */}
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt="Urban Sofa Set"
      />

      {/* Content */}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom className='text-center'>
          {title}
        </Typography>
        <Box className="flex items-center justify-center text-center gap-2">
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            {originalPrice}
          </Typography>
          <Typography variant="subtitle1" color="primary" fontWeight="bold">
            {discountedPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
