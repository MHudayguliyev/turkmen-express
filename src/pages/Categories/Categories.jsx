import React from 'react'
import { BrandCard } from '../../components/BrandCard/BrandCard'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import { SideBar } from '../../components/SideBar/SideBar'



const Categories = () => {
  return (
    <div className='container'>
      <h1> Categories</h1>
      <SideBar />
      {/* <ProductCard />
      <CategoryCard />
      <BrandCard /> */}
    </div>

  )
}

export default Categories
