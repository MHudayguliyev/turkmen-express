import React from 'react'
import styles from './CategoriesSideBar.module.scss'
import {IoIosArrowForward} from 'react-icons/io'
import {BiBasket} from 'react-icons/bi'
import SideBarContainer from '../SideBarContainer'
import { useQuery } from 'react-query'


const categories = [
    {
        name: 'Kompyuter',
        subCtgs: [{name: 'Asus'}, {name: 'Mac'},{name: 'Lenova'}, {name: 'Acer'}]
    },
    {
        name: 'Telefon',
        subCtgs: [{name: 'Redmi'}, {name: 'Samsung'}, {name: 'Iphone'}]
    },
    {
        name: 'Telewizor',
        subCtgs: []
    },
    {
        name: 'Tablets/Ipad',
        subCtgs: []
    },
    {
        name: 'Holodelnik',
        subCtgs: [{name: 'Samsung'}, {name: 'Beko'}]
    },

]
const CategoriesSideBar = () => {
    return (
       <SideBarContainer name='Kategoriyalar'>
           <ul className={styles.categories}>
               {
                   categories.map((category, index) => {
                       return (
                           <li key={index} className={styles.category}>
                               {category.name}
                               <span style={{marginLeft: '10px'}}>({category.subCtgs.length})</span>
                               {
                                   category.subCtgs.length > 0 ? <span className={styles.plus}><i className='bx bx-plus'/></span>  : <i/>
                               }
                           </li>
                            
                       )
                   } )
               }
           </ul>
       </SideBarContainer>
    )
}

export default CategoriesSideBar