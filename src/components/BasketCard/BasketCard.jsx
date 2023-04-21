import React from 'react'
import styles from './BasketCard.module.scss'
import testImg from '../../assets/images/desert1.png'
import Row from '../../compLibrary/Grid/Row'
import Col from '../../compLibrary/Grid/Col'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiTrash2} from 'react-icons/fi'

const BasketCard = () => {
    return (
        <div className={styles.basket}>
        <Row rowGutter={15} >
            <Col>
            <div className={styles.prdImg}>
                 <img src={testImg}/>
            </div>
            </Col>
            <Col grid={{span: 4}}>
                <div className={styles.prdInfo}>
                <h5 className={styles.def}>
                Make this strawberry mousse using just three ingredients
                </h5>
                    <h5>Easy strawberry mousse</h5>
            </div>
            </Col>
            <Col grid={{xlg: 3}}>
                <div className={styles.price}>
                    <span>125.50</span>
                    <div>
                        <span className={styles.sale}>-30%</span>
                        <span className={styles.oldPrice}>1234</span>
                    </div>
                </div>
            </Col>
            <Col>
                <div className={styles.addToBasket}>
                    <span className={styles.operation}><i className='bx bx-plus'/></span> 
                    <span className={styles.qty}>{ 10 }</span>
                    <span className={styles.operation}><i className='bx bx-minus'/></span>
                </div>
            </Col>
            <Col >
                <div className={styles.icons}>
                    <AiOutlineHeart size={24} color='#ccc'/>
                    <FiTrash2 size={20} color='#ccc'/>
                </div>
            </Col>
        </Row>
        </div>
        // <div className={styles.basket}>
        //     <div className={styles.prdImg}>
        //         <img src={testImg}/>
        //     </div>
        //     <div className={styles.prdInfo}>
        //         <h5 className={styles.def}>
        //             lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        //         </h5>
        //         <h5>Финансовое оборудование</h5>
        //     </div>
        //     <div className={styles.price}>
        //         <span>125.50</span>
        //         <div>
        //             <span className={styles.sale}>30%</span>
        //             <span className={styles.oldPrice}>1234</span>
        //         </div>
        //     </div>
        //     <div className={styles.addToBasket}>
        //        <span><i className='bx bx-plus'/></span> 
        //         <span>{ 10 }</span>
        //         <span><i className='bx bx-minus'/></span>
        //     </div>
        //     <div>
        //         <i className='bx bx-heart'></i>
        //         <i className='bx bx-trash'></i>
        //     </div>
        // </div>
    )
}

export default BasketCard