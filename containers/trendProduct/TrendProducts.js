import styles from "./trendProducts.module.css"
import ProductCard from "../../components/productCard/ProductCard";


function TrendProducts() {
    return (
        <section className={styles.trend_product}>
            <div className="container">
                <p className={styles.products_subtitle}>محبوب ترین محصولات</p>
                <h4 className={styles.products_title}>بهترین محصولات</h4>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductCard/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductCard/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductCard/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductCard/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductCard/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendProducts;