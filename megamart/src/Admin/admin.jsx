import React, { useState } from 'react';
import { createProduct } from '../api';
import { Input } from 'antd';
import { Button } from 'antd';


const {TextArea} = Input;
const CreateProduct = ({ onProductCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stock', stock);

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      const newProduct = await createProduct(formData);
      onProductCreated(newProduct);
      // Reset form
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setStock('');
      setImages([]);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container row d-flex justify-content-center align-items-center'>
      <h2>Create New Product</h2>
      <div className='col p-2'>
      <Input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className='col-md-6 bg-white p-2 my-2'
      />
      <TextArea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className='col-md-8 p-2 my-2'
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className='col-md-8 p-2 my-2'
      />
      <Input
        type="text"
        placeholder="Category ID"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className='col-md-6 p-2 my-2'
      />
      <Input
        type="number"
        placeholder="Stock Quantity"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
        className='col-md-7 p-2 my-2'
      />
      <Input
        type="file"
        multiple
        onChange={handleImageChange}
        accept="image/*"
        className='col-md-7 p-2 my-2'
      />
      <Button type="submit" className='bg-primary d-flex'>Create Product</Button>
      </div>
    </form>
  );
};

export default CreateProduct;
