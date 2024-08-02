import React from 'react'
import SearchWithAutocomplete from '../component/Home componet/SearchWithAutocomplete'
import FeaturedProducts from '../component/FeaturedProducts'
import Category from '../component/Home componet/Category'
export default function HomePage() {
  return (
    <div >
      <SearchWithAutocomplete/>
      <Category/>
      <FeaturedProducts/>
    </div>
  )
}
