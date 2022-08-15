import styles from "./productDetail.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";

import {faStar,faHeart} from '@fortawesome/free-solid-svg-icons'



export default function ProductDetails({title}) {
    library.add(far, faStar)
    return (
        <section className={styles.productDetail}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-6`}>
                        <h2>توت فرنگی تازه</h2>
                        <div className={styles.rates}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                        </div>
                        <div className={styles.prices}>
                            <span>150</span>
                            <span><strike>150</strike></span>
                        </div>
                        <div className={styles.processAdd}></div>
                        <div>
                            <h6 className={styles.title}>توضیحات:</h6>
                            <p className={styles.content}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز</p>
                        </div>
                        <div className={styles.logos}>
                            <div className={styles.logo}></div>
                        </div>
                    </div>
                    <div className={`col-lg-6`}>
                        <div className={`row`}>
                            <div className={`col-lg-10`}>
                                <div className={styles.imageWrapper}>

                                </div>
                            </div>
                            <div className={`col-lg-2`}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}