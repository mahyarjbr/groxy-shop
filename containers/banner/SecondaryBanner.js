import styles from "./secondaryBanner.module.css"

function SecondaryBanner() {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className={styles.title}>ما به شما ارزان ترین قیمت را پیشنهاد می دهیم</h2>
                        <p className={styles.content}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز
                        </p>
                        <p className={styles.content}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز
                        </p>

                    </div>
                    <div className="col-lg-6">
                        <div className={styles.image_wrapper}>
                            <img src="/images/couple.png" />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default SecondaryBanner