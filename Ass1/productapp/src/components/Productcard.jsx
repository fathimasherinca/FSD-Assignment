import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ title, image, category, price }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Category: {category}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Price: ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};