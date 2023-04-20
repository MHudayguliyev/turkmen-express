import React, {useState} from 'react'
import styles from './ProductsTags.module.scss'
import {IoIosArrowForward} from 'react-icons/io'
import {BiBasket} from 'react-icons/bi'
import SideBarContainer from '../SideBarContainer'
import { useQuery } from 'react-query'
import MultiRangeSlider from "multi-range-slider-react";


const tags = [
    {
        name: 'Lenova',
    },
    {
        name: 'Apple',
    },
    {
        name: 'Book',
    },
    {
        name: 'Canon',
    },
    {
        name: 'Sony',
    },
    {
        name: 'washer',
    },
]
const ProductsTags = () => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    return (
       <SideBarContainer name='Product tags'>
           <div className={styles.productTags}>
                {
                    tags.map((tag, index) => {
                        return (
                            <div className={styles.tag} key={index}>
                                {tag.name}
                            </div>
                        )
                    })
                }
               
           </div>
       </SideBarContainer>
    )
}

export default ProductsTags