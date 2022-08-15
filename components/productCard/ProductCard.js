
import styles from "./productCard.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faStar,faHeart} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'


function ProductCard({id,name,price,category,rate}) {
    library.add(far, faStar)
    return (
        <div key={id} className={styles.product}>
            <span className={styles.hot}>جدید</span>
            <span className={styles.product_like}>
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
            <img
                className={styles.product_image}
                src="images/product1.png"
                alt="گوشت گوسفندی"
            />
            <div className={styles.product_rates}>


                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon="fa-regular fa-star" />

            </div>
            <h6 className={styles.product_title}>{name}</h6>
            <div className={styles.product_prices}>
                <span className={styles.product_price}>{price}</span>
                <strike className={`${styles.product_price} hide`}>160,000</strike>
            </div>
            <a href="#" className={styles.product_button}
            >
                <button className="btn__secondary">اضافه کردن به سبد</button>
            </a
            >
        </div>
    )
}

export default ProductCard;