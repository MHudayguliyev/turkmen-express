import React from 'react'
import styles from './BrandCard.module.scss'
import ikea from '../../assets/images/ikea.webp'


export const BrandCard = () => {
  return (
    <div className={styles.brandCard}>
        <div className={styles.brandImg}>
            <img src={ikea} alt="" />
        </div>
        <div className={styles.brandLine}/>
        <h4 className={styles.brandName}>IKEA</h4>
    </div>
  )
}
