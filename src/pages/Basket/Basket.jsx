import React, {useState, useEffect} from 'react'

///// styles
import styles from './Basket.module.scss'
import BasketCard from '../../components/BasketCard/BasketCard'

const Basket = () => {
  console.log('hello')
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <BasketCard />
        <BasketCard />
        <BasketCard />
        <BasketCard />
      </div>
    </div>
  )
}

export default Basket