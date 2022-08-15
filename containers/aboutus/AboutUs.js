import styles from "./aboutUs.module.css"
import PrimaryButton from "../../components/buttons/Buttons";
import {useState} from "react";

function AboutUs() {
    const [showText, setShowText] = useState(false)
    const handleShowText = () => {
        setShowText(!showText);
        console.log("khar")
    }
    return (
        <section className={styles.about_us}>
            <img
                className={styles.about_left_img}
                src="images/aboutus-removebg-preview.png"
                alt=""
            />
            <img className={styles.about_right_img} src="images/side2.png" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.about}>
                            <p className={styles.about_head}>درباره ما</p>
                            <h2 className={styles.about_title}>
                                ما برای شما بهترین تجربه رو فراهم کردیم
                            </h2>
                            <p className={styles.about_content}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                                مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                آینده، شناخت فراوان جامعه و متخصصان را می طلبد<span className={showText ? styles.hide : styles.show}>...</span>
                                <span className={showText ? styles.show : styles.hide}
                                >، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                      علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                      کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
                      ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                      نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                      اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </span>
                            </p>
                            <PrimaryButton onClick={handleShowText}>بیشتر بخوانید</PrimaryButton>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;