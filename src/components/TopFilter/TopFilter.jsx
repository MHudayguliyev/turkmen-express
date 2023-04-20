import React from 'react';
import styles from './TopFilter.module.scss'
import {FaListUl} from 'react-icons/fa'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'


const TopFilter = () => {
    return (
        <div className={styles.topFilter}>
            <div className={styles.view}>
                <FaListUl />
                <BsFillGrid3X3GapFill color='#455560' />
            </div>
            <div className={styles.filter}>
                <div className={styles.textContent}>Showing all results</div>
                <div className={styles.dropwdown}>
                   <span className={styles.dropwDownTxt}>DefaultSelect</span> 
                    <i className='bx bx-chevron-down'/>
                </div>
            </div>
        </div>
    )
}

export default TopFilter