import styles from "./features.module.css"
import PrimaryButton from "../../components/buttons/Buttons";
import Link from "next/link";

function Features(){
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className={styles.feature}>
                            <img className={styles.feature_img} src="images/brand1.png" alt="" />
                            <h6 className={styles.feature_title}>سفارش آنلاین</h6>
                            <p className={styles.feature_content}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <img className={styles.feature_img} src="images/brand1.png" alt="" />
                            <h6 className={styles.feature_title}>سفارش آنلاین</h6>
                            <p className={styles.feature_content}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است
                            </p>
                        </div>
                    </div>
                    <div id={styles.basket} className="col-lg-6 ">
                        <div className={styles.feature_center}>
                            <img src="images/basket.png" alt="" />
                            <Link href="#"><PrimaryButton>خرید کنید</PrimaryButton></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className={styles.feature}>
                            <img className={styles.feature_img} src="images/brand1.png" alt="" />
                            <h6 className={styles.feature_title}>سفارش آنلاین</h6>
                            <p className={styles.feature_content}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <img className={styles.feature_img} src="images/brand1.png" alt="" />
                            <h6 className={styles.feature_title}>سفارش آنلاین</h6>
                            <p className={styles.feature_content}>
                                نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;