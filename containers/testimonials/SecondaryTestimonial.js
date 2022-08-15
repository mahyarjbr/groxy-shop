import styles from "./SecondaryTestimonial.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {library} from '@fortawesome/fontawesome-svg-core'


import {far} from '@fortawesome/free-regular-svg-icons'
import PrimaryButton from "../../components/buttons/Buttons";

function SecondaryTestimonial() {
    library.add(far, faStar)
    return (
        <section className={styles.testimonials}>
            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                       <div className={styles.testimonial}>
                           <img className={styles.image} src="/images/brand9.png"/>
                           <h4 className={styles.title}>هدف ما</h4>
                           <p className={styles.content}>
                               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                               چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                               تکنولوژی مورد نیاز

                           </p>
                           <div className={styles.btn}>
                           <PrimaryButton>خرید کنید</PrimaryButton>
                           </div>

                       </div>
                    </div>

                    <div className="col-md-6">
                     <div className={styles.testimonial}>
                         <img className={styles.image} src="/images/brand9.png"/>
                         <h4 className={styles.title}>هدف ما</h4>
                         <p className={styles.content}>
                             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                             چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                             تکنولوژی مورد نیاز
                         </p>
                         <div className={styles.btn}>
                             <PrimaryButton>خرید کنید</PrimaryButton>
                         </div>
                     </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SecondaryTestimonial