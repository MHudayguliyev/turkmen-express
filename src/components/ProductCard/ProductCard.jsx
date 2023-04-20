import React from 'react'
import styles from './ProductCard.module.scss'
import img from '../../assets/images/test.jpg'
import star from '../../assets/images/star.png'


const ProductCard = (props) => {
  const {data} = props

  return (
    <div className={styles.productCard}>
      <div className={styles.prdImg}>
          <img src={data.main_image ? data.main_image : data.image} alt="" className={styles.img} />
          <div className={styles.cardSale}>Sale</div>
      </div>
      <div className={styles.cardBody}>
        <h4>{data.name_ru}</h4>
        <div className={styles.cardDetail}>
          <div className={styles.cardTitle}>
            <img src={star} alt="" width={14} height={14}/>
            <img src={star} alt="" width={14} height={14}/>
            <img src={star} alt="" width={14} height={14}/>
            <img src={star} alt="" width={14} height={14}/>
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.oldPrice}>$987.23</span>
            <span className={styles.newPrice}>$890.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard



// <div class="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
//     <div class="relative">
//         <img class="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image">
//         <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
//         </div>
//     </div>
//     <div class="p-4">
//         <h3 class="text-lg font-medium mb-2">Product Title</h3>
//         <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
//             vel eros fermentum faucibus sit amet euismod lorem.</p>
//         <div class="flex items-center justify-between">
//             <span class="font-bold text-lg">$19.99</span>
//             <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                 Buy Now
//             </button>
//         </div>
//     </div>
// </div>