import React, {useState, useEffect} from 'react'
import { useQuery } from 'react-query'

import Col from '../../compLibrary/Grid/Col.jsx'
import Row from '../../compLibrary/Grid/Row.jsx'
import { GetProducts } from '../../api/queries/Getters.js'
import Preloader from '../../compLibrary/Preloader/Preloader.jsx'
import ProductCard from '../../components/ProductCard/ProductCard'

///// styles
import styles from './Products.module.scss'
import BasketCard from '../../components/BasketCard/BasketCard.jsx'

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
        <div className={styles.container}>
            {
                isLoading ? <span className={styles.loading}><Preloader /></span> : 
                isError ? <span className={styles.noData}>No data</span> : 
                <Row colGutter={10} rowGutter={10}>
                    {
                        productList && productList?.map((item, index) => (
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
        <BasketCard />
      </>
  )
}

export default Products