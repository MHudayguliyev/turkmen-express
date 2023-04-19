import React, {useState, useEffect} from 'react'
import { useQuery } from 'react-query'

import Col from '../../compLibrary/Grid/Col.jsx'
import Row from '../../compLibrary/Grid/Row.jsx'
import { GetProducts } from '../../api/queries/Getters.js'
import Preloader from '../../compLibrary/Preloader/Preloader.jsx'
import ProductCard from '../../components/ProductCard/ProductCard'

///// styles
import styles from './Products.module.scss'

const Products = () => {
    const [productList, setProductList] = useState([])

    const {
        data: productsData, 
        isLoading, 
        isError
    } = useQuery('getProducts', () => GetProducts(), {
        refetchOnWindowFocus: false
    })

    useEffect(() => {
        if(!isLoading || !isError) {
            setProductList(productsData?.results)
        }
    }, [productsData])

    console.log('list', productList)


  return (
    <>
        <div className={``}>Here goes the breadcrumb</div>
        <h1>Product name</h1>
        {
            isLoading ? <span className={styles.loading}><Preloader /></span> : 
            isError ? <span className={styles.noData}>No data</span> : 
            <Row colGutter={4} rowGutter={4}>
                {
                    productList && productList?.map((item, index) => (
                        <Col key={index}>
                            <ProductCard data={item}/>
                        </Col>
                    ))
                }
            </Row>
        }
    </>
  )
}

export default Products