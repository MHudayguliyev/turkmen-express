import React, {useState, useEffect} from 'react'
import styles from './Categories.module.scss'
import Row from '../../compLibrary/Grid/Row'
import Col from '../../compLibrary/Grid/Col'
import { BrandCard } from '../../components/BrandCard/BrandCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useQuery } from 'react-query'
import { GetCategories } from './../../api/queries/Getters';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Preloader from '../../compLibrary/Preloader/Preloader.jsx'
import CategoryCard from '../../components/CategoryCard/CategoryCard'


const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([])
  const {
      data: categoriesData, 
      isLoading, 
      isError
  } = useQuery('getCategories', () => GetCategories(), {
      refetchOnWindowFocus: false
  })

  useEffect(() => {
      if(!isLoading || !isError) {
          setCategoriesList(categoriesData?.results)
      }
  }, [categoriesData])

  console.log('list cat', categoriesList)

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
 console.log(categoriesData)
  return (
    <div className={styles.container}>
      {
            isLoading ? <span className={styles.loading}><Preloader /></span> : 
            isError ? <span className={styles.noData}>No data</span> : 
            <Row colGutter={10} rowGutter={10}>
                {
                    categoriesData && categoriesData?.map((item, index) => (
                        <Col key={index} grid={{ xxlg: 3, xlg: 4, lg: 6, span: 6, sm: 12 }} >
                            <div className={styles.products}>
                                <ProductCard data={item}/>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        }
    </div>
  )
}

export default Categories
