import React, {useState} from 'react'
import styles from './FilterPrice.module.scss'
import MultiRangeSlider from "multi-range-slider-react";
import SideBarContainer from '../SideBarContainer';

const FilterPrice = () => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    return (
        <SideBarContainer name='Filter by price'>
            <div className={styles.priceRange}>
                <MultiRangeSlider
                    min={0}
                    max={100}
                    step={5}
                    ruler={false}
                    label={true}
                    preventWheel={false}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                        handleInput(e);
                    }}
                    className={styles.multiRangeSilder}
                />
            </div>
        </SideBarContainer>
    )
}

export default FilterPrice