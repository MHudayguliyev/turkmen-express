import React, {useState, useEffect} from 'react'
import Col from '../../compLibrary/Grid/Col.jsx'
import Row from '../../compLibrary/Grid/Row.jsx'

import { useQuery } from 'react-query'
import { GetBrands } from '../../api/queries/Getters.js'
import Preloader from '../../compLibrary/Preloader/Preloader.jsx'

// styles
import styles from './Brands.module.scss'
import { BrandCard } from '../../components/BrandCard/BrandCard.jsx'


const Brands = () => {
  const [brandsList, setBarndsList] = useState([])

  const {
    data: brandsData, 
    isLoading, 
    isError
  } = useQuery('getBrands', () => GetBrands(), {
    refetchOnWindowFocus: false
  })

  console.log('data', brandsData)
  useEffect(() => {
    if(!isLoading || !isError) {
      setBarndsList(brandsData?.results)
    }
  }, [brandsData])

  return (
    <>
      <div className={``}>Here goes the breadcrumb</div>
      <h1>Brandin ady</h1>

      {isLoading ? <span className={styles.loading}><Preloader /></span> : 
        isError ? <span className={styles.noData}>No data</span> : 
        <Row  colGutter={10}>
            {
              brandsList && brandsList?.map((item, index) => (
                <Col key={index} grid={{sm: 6, md: 4, lg:3, xlg: 3}}>
                  <BrandCard 
                    data={item}
                  />
                </Col>
              ))
            }
        </Row>
      }
      
    </>
  )
}

export default Brands