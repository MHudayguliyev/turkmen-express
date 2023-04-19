import React from 'react'
import styles from './BrandCard.module.scss'
import ikea from '../../assets/images/ikea.webp'


export const BrandCard = (props) => {
  const {
    data
  } = props

  return (
    <div className={styles.brandCard}>
        <div className={styles.brandImg}>
            <img src={data.logo} alt="Image" />
        </div>
        <div className={styles.brandLine}/>
        <h4 className={styles.brandName}>{data.name}</h4>
    </div>
  )
}
