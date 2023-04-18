import React from 'react'
import Row from '../../compLibrary/Grid/Row'
import { BrandCard } from '../../components/BrandCard/BrandCard'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import { SideBar } from '../../components/SideBar/SideBar'
import { useQuery } from 'react-query'
import { GetProducts } from './../../api/queries/Getters';




const Categories = () => {
 const  {
  data
 } = useQuery('GetProducts', GetProducts())

 console.log(data)
  return (
    <div className='container'>
      <h1> Categories</h1>
      <Row>

      </Row>
    </div>

  )
}

export default Categories
