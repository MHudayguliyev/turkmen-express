import React from 'react'
import styles from './BasketSidebar.module.scss'
import {IoIosArrowForward} from 'react-icons/io'
import {BiBasket} from 'react-icons/bi'
import SideBarContainer from '../SideBarContainer'
import { useQuery } from 'react-query'


const BasketSidebar = () => {
    return (
       <SideBarContainer name='Sargyt barada'>
           <div className={styles.basketSidebar}>
                <div className={styles.sidebarInfo}>
                    <span>Umumy: </span>
                    <span>350</span>
                </div>
                <div className={styles.sidebarInfo}>
                   <span>Eltip bermek:</span>
                   <span>10man</span>
                </div>
                <div className={styles.sidebarInfo}>
                   <span className={styles.sale}>Arzanladys: </span>
                   <span>0</span>
                </div>
                <div className={styles.netTotal}>
                    <span className={styles.total}>Jemi bahasy</span>
                    <span className={styles.total}>360</span>
                </div>
                <button className={styles.btn}>Tassyklamak</button>
           </div>
       </SideBarContainer>
    )
}

export default BasketSidebar