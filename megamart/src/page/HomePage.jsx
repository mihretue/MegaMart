import React from 'react'
import ProductSlide from '../component/Homecomponet/ProductSlide'
import SearchWithAutocomplete from '../component/Homecomponet/SearchWithAutocomplete'
import FeaturedProducts from '../component/FeaturedProducts'
import Category from '../component/Homecomponet/Category'
export default function HomePage() {
  return (
    <div >
      <SearchWithAutocomplete/>
      <Category/>
      <FeaturedProducts/>
      <ProductSlide/>
    </div>
  )
}
