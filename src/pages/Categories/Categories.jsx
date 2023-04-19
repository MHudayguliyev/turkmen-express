import React from 'react'
import Row from '../../compLibrary/Grid/Row'
import Col from '../../compLibrary/Grid/Col'
import { BrandCard } from '../../components/BrandCard/BrandCard'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import { SideBar } from '../../components/SideBar/SideBar'
import { useQuery } from 'react-query'
import { GetProducts } from './../../api/queries/Getters';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'


const Categories = () => {
 const  {
  data
 } = useQuery('GetProducts', GetProducts())
 

 const crumbs = [
   {
     name: 'Categories',
     link: '/categories',
     slug: '/categories'
   },
   {
     name: 'Brands',
     link: 'brands',
     slug: '/brands'
   }
 ]
 console.log(data)
  return (
    <div className='container'>
      <h1> Categories</h1>
      <BreadCrumbs crumbs={crumbs}/>
      <Row rowGutter={5} colGutter={5} style={{width: '100%'}}>
        <Col>
          <CategoryCard />
        </Col>
        <Col>
          <CategoryCard />
        </Col>
        <Col>
          <CategoryCard />
        </Col>
        <Col>
          <CategoryCard />
        </Col>

      </Row>
    </div>
  )
}

export default Categories
