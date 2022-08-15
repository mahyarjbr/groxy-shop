import styles from "./testimonials.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar ,faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'


import {far} from '@fortawesome/free-regular-svg-icons'
function Testimonials(){
    library.add(far, faStar)
    return(
        <section className={styles.testimonials}>
            <div className="container">
                <p className={styles.products_subtitle}>نظرات</p>
                <h4 className={styles.products_title}>نظرات مشتریان</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.testimonial}>
                            <blockquote>
                                <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft}/>
                                <q className={styles.content}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                </q>
                                <div className={styles.rates}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />


                                </div>
                                <p className={styles.name}>مهدی باقری</p>
                            </blockquote>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.testimonial}>
                            <blockquote>
                                <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft}/>
                                <q className={styles.content}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                </q>
                                <div className={styles.rates}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />


                                </div>
                                <p className={styles.name}>مهدی باقری</p>
                            </blockquote>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials