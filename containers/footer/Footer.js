import styles from "./footer.module.css"
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter,faFacebookF,faPinterestP,faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className={styles.main_footer}>
            <div className="container">
               <div className={styles.form_wrapper}>
                   <div className={styles.form}>
                       <div className="row">
                           <div className="col-lg-8">
                               <h2>همین حالا ثبت نام کنید</h2>

                               <div className={`input-group mb-3`}>
                                   <input type="text" className={`${styles.form_control} form-control`} placeholder="ایمیل خود را وارد کنید"
                                          aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                   <div className="input-group-append">
                                       <button className={`${styles.form_btn} btn btn-outline-secondary`} type="button">ثبت نام کنید</button>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-4">
                               <div>
                                   <img className={styles.form_img} src="images/basket2.png"/>
                               </div>

                           </div>

                       </div>

                   </div>

               </div>
                <div className={styles.footer}>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <ul className={styles.items}>
                                <h6>ارتباط با ما</h6>
                                <li className={styles.item}>
                                    <p className={styles.title}>آدرس :</p>
                                    <p className={styles.content}>مشهد خیابان جانباز</p>
                                </li>
                                <li className={styles.item}>
                                    <p className={styles.title}>تلفن :</p>
                                    <p className={styles.content}>383838383</p>
                                </li>
                                <li className={styles.item}>
                                    <p className={styles.title}>ایمیل :</p>
                                    <p className={styles.content}>info@info.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <ul className={styles.items}>
                                <h6>لینک ها</h6>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>درباره ما</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>وبلاگ</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>ارتباط با ما</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>خدمات</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>فروشگاه</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <ul className={styles.items}>
                                <h6>لینک ها</h6>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>درباره ما</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>وبلاگ</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>ارتباط با ما</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>خدمات</a></Link>
                                </li>
                                <li className={styles.item}>
                                    <Link href="#"><a className={styles.link}>فروشگاه</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <ul className={styles.items}>
                                <h6>ساعت کاری</h6>
                                <li className={styles.item}>
                                    <p className={styles.title}>آدرس :</p>
                                    <p className={styles.content}>مشهد خیابان جانباز</p>
                                </li>
                                <li className={styles.item}>
                                    <p className={styles.title}>تلفن :</p>
                                    <p className={styles.content}>383838383</p>
                                </li>
                                <li className={styles.item}>
                                    <p className={styles.title}>ایمیل :</p>
                                    <p className={styles.content}>info@info.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
            <div className={styles.footer_end}>
                <div className="container">
                   <div className={styles.end_wrapper}>
                       <p>طراحی و توسعه توسط مهیار جباری</p>
                       <div className={styles.socials}>
                           <Link href="#"><a><FontAwesomeIcon icon={faFacebookF}/></a></Link>
                           <Link href="#"><a><FontAwesomeIcon icon={faTwitter}/></a></Link>
                           <Link href="#"><a><FontAwesomeIcon icon={faPinterestP}/></a></Link>
                           <Link href="#"><a><FontAwesomeIcon icon={faInstagram}/></a></Link>
                       </div>
                   </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer