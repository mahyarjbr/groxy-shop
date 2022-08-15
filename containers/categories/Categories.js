import styles from "./categories.module.css"

function Categories(){
    return (
        <section className={styles.categories}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={`${styles.categories_card} ${styles.categories_card1} d-flex`}>
                            <div className="">
                                <h4 className={styles.card_title}>
                                    خرید<br />
                                    سبزیجات <br />تازه
                                </h4>
                                <div className="d-flex align-items-end mx_10">
                                    <a className={styles.card_link} href="#">بیشتر بخوانید</a>
                                    <i className="fa-solid fa-arrow-left mx-2"></i>
                                </div>
                            </div>
                            <div className="">
                                <img className={styles.card_image} src="images/Untitled-1.png" alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={`${styles.categories_card} ${styles.categories_card2} d-flex`}>
                            <div className="">
                                <h4 className={styles.card_title}>
                                    خرید<br />
                                    سبزیجات <br />تازه
                                </h4>
                                <div className="d-flex align-items-end mx_10">
                                    <a className={styles.card_link} href="#">بیشتر بخوانید</a>
                                    <i className="fa-solid fa-arrow-left mx-2"></i>
                                </div>
                            </div>

                            <img className={styles.card_image} src="images/fruit3.png" alt="#" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={`${styles.categories_card} ${styles.categories_card3} d-flex`}>
                            <div className="">
                                <h4 className={styles.card_title}>
                                    خرید<br />
                                    سبزیجات <br />تازه
                                </h4>
                                <div className="d-flex align-items-end mx_10">
                                    <a className={styles.card_link} href="#">بیشتر بخوانید</a>
                                    <i className="fa-solid fa-arrow-left mx-2"></i>
                                </div>
                            </div>
                            <div className="">
                                <img className={styles.card_image} src="images/fruit2.png" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;