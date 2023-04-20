import React from 'react';
import styles from './FilterBy.module.scss'
import SideBarContainer from '../SideBarContainer';

const colors = [
    {
        name: 'White',
        products: [{name: 'short'},{name: 'dress'},{name: 'jeans'}]
    },
    {
        name: 'Blue',
        products: [{name: 'short'},{name: 'dress'}]
    },
    {
        name: 'Green',
        products: [{name: 'short'},{name: 'dress'},{name: 'jeans'}]
    },
    {
        name: 'Orange',
        products: [{name: 'short'}]
    },
    {
        name: 'Golden',
        products: [{name: 'short'},{name: 'dress'}]
    },
    {
        name: 'Magenta',
        products: [{},{},{}]
    },
]

const brands = [
    {
        name: 'Hp',
        products: [{}]
    },
    {
        name: 'Lenova',
        products: [{},{},{}]
    },
]

const sizes = [
    {
        name: 'M',
        products: [{}]
    },
    {
        name: 'XL',
        products: [{},{},{}]
    },
    {
        name: 'XXL',
        products: [{}]
    },

]
const FilterBy = ({filterBy}) => {
    const filter = () => {
        switch(filterBy) {
          case "color":   return colors;
          case "brand":   return brands;
          case "size":   return sizes;
          default:      return;
        }
      }
    return (
        <SideBarContainer name={`Filter by ${filterBy}`}>
            <div className={styles.colors}>
                {
                    filter().map((filterItem, index) => {
                        return (
                            <div className={styles.color} key={index}>
                                <input type='checkbox' className={styles.checkBox}/>
                                <label className={styles.label}>
                                    {filterItem.name}
                                    <span styles={{marginLeft: '10px'}} >({filterItem.products.length})</span>
                                </label>
                                <br/>
                            </div>
                        )
                    })
                }
            </div>
        </SideBarContainer>
    )
}

export default FilterBy