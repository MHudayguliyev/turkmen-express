import React from 'react'
import styles from './CategoryCard.module.scss'
import cardImg from '../../assets/images/categoryCrd.png'

const CategoryCard = () => {
  return (
    <div className={styles.categoryCard}>
        <div className={styles.cardImg}>
            <img src={cardImg} alt="" />
        </div>
        <div className={styles.cardBody}>
            <h4>Laptop&Computer</h4>
            <ul className={styles.ctgs}>
                <li> <i className='bx bx-chevron-right'></i> Components</li>
                <li> <i className='bx bx-chevron-right'></i> Printer</li>
                <li> <i className='bx bx-chevron-right'></i> Laptop</li>
                <li> <i className='bx bx-chevron-right'></i> Components</li>
            </ul>
            <button className={styles.btn}>
              <span className={styles.btnTxt}> Sargamak</span> 
            </button>
        </div>
    </div>
  )
}

export default CategoryCard
