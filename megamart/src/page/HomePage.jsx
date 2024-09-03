import React from 'react'
import ProductSlide from '../component/Homecomponet/ProductSlide'
import SearchWithAutocomplete from '../component/Homecomponet/SearchWithAutocomplete'
import FeaturedProducts from '../component/FeaturedProducts'
import Category from '../component/Homecomponet/Category'
import ProductList from '../component/Homecomponet/ProductList'
export default function HomePage() {
  return (
    <div >
      <SearchWithAutocomplete/>
      <Category/>
      <FeaturedProducts/>
      <ProductSlide/>
      <ProductList/>
    </div>
  )
}
