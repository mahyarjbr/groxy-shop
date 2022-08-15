import styles from "./banner.module.css"

function Banner(){
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.banner_container}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className={styles.banner_content}>
                                <div>
                                    <h2 className=""><span className="ml_5">50%</span>تخفیف</h2>
                                    <div className={styles.banner_links}>
                                        <a className="banner_link" href="#">بیشتر بخوانید</a>
                                        <i className="fa-solid fa-arrow-left mx-2"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="banner_margin">
                                        معروف ترین و<br />
                                        بهترین محصولات
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className={styles.bannner_image}>
                                <div></div>
                                <img src="images/offbanner.png" alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;