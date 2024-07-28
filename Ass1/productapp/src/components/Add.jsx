import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Add = () => {
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      productName,
      image,
      price,
      category
    });
    // Reset form fields after submission
    setProductName('');
    setImage('');
    setPrice('');
    setCategory('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Product
      </Typography>
      <TextField
        label="Product Name"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <TextField
        label="Image URL"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <TextField
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <TextField
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Add Product
      </Button>
    </Box>
  );
};

export default Add;