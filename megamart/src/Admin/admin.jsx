import React, { useState } from 'react';
import { createProduct } from '../api';
import { Input } from 'antd';
// import { Button } from 'antd';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

const {TextArea} = Input;
const CreateProduct = ({ onProductCreated }) => {
  const preset_value = "mihretupreset"
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('')

  const uploadImageToCloudinary = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset_value); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dyg8xfttm/image/upload', formData);
      return response.data.secure_url; // This is the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log("form submitted")
    alert(`Name: ${name}, Description: ${description}, Price: ${price}`); 
    try {
      //upload the image to cloudinary
      let imageUrl = null
      if (image) {
        imageUrl = await uploadImageToCloudinary(image);
        console.log(imageUrl)
        }

        //preparing the form
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stock', stock);

    if (imageUrl){
      formData.append('image', imageUrl);
    }

    //create the product
      const newProduct = await createProduct(formData);
      console.log('New Product: ', newProduct)
      if(onProductCreated && typeof onProductCreated==='function'){
        onProductCreated(newProduct);
      }else{
        console.log('onProdcutCreated is not defined or is not a function')
      }
      // Reset form
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setStock('');
      setImage(null);
      setImageUrl('');

      console.log(formData)
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
      <button type="submit" className='bg-primary d-flex'>Create Product</button>
      </div>
    </form>
  );
};

export default CreateProduct;
