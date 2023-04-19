import React from 'react'
import styles from './SideBar.module.scss'
import {IoIosArrowForward} from 'react-icons/io'
import {BiBasket} from 'react-icons/bi'

export const SideBar = (props) => {
    const {
        data
    } = props

  return (
    <div className={styles.sideBar}>
        <div className={styles.title}>
            <h4 className={styles.titleName}>Kategoriyalar</h4>
        </div>
        <div className={styles.items}>
            {data ? data?.map((item, index) => (
                <div className={styles.itemDiv} key={index}>
                    <div className={styles.item}>
                        <BiBasket className={styles.leftIcon}/>
                        <h5>{item.name_ru}</h5>
                        <IoIosArrowForward size={20} className={styles.chevron}/>
                    </div>
                </div> 
            )) : ''}

            {/* <div className={styles.itemDiv}>
                <div className={styles.item}>
                    <BiBasket size={20}/>
                    <IoIosArrowForward size={20}/>
                </div>
            </div>
            <div className={styles.itemDiv}>
                <div className={styles.item}>
                    <BiBasket size={20}/>
                    <h3>Kategoriya ady</h3>
                    <IoIosArrowForward size={20}/>
                </div>
            </div>
            <div className={styles.itemDiv}>
                <div className={styles.item}>
                    <BiBasket size={20}/>
                    <h3>Kategoriya ady</h3>
                    <IoIosArrowForward size={20}/>
                </div>
            </div>
            <div className={styles.itemDiv}>
                <div className={styles.item}>
                    <BiBasket size={20}/>
                    <h3>Kategoriya ady</h3>
                    <IoIosArrowForward size={20}/>
                </div>
            </div>
            <div className={styles.itemDiv}>
                <div className={styles.item}>
                    <BiBasket size={20}/>
                    <h3>Kategoriya ady</h3>
                    <IoIosArrowForward size={20}/>
                </div>
            </div> */}


        </div>
    </div>
  )
}
