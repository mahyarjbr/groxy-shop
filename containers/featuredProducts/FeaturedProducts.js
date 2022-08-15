import ProductCard from "../../components/productCard/ProductCard";
import styles from "./featuredProducts.module.css";
import data from "../../data/products.json"
import {useState} from "react";

function FeaturedProducts() {

    const [productData, setProductData] = useState([...data.productsList])

    const filterProduct = (val) => {
        if (val === "all") {
            return setProductData([...data.productsList]);
        }
        const filteredProduct = data.productsList.filter(product => product.category === val);
        setProductData(filteredProduct);

    }


    return (
        <section className={styles.featured_products}>
            <img className={styles.featured_products_side} src="images/side3.png" alt=""/>

            <div className="container">
                <p className={styles.products_subtitle}>پرفروش ترین ها</p>
                <h4 className={styles.products_title}>محصولات پرفروش</h4>
                <div className={styles.filters}>
                    <button onClick={() => filterProduct("all")}>همه</button>
                    <button onClick={() => filterProduct("fruits")}>میوه</button>
                    <button onClick={() => filterProduct("health")}>سلامتی</button>
                    <button onClick={() => filterProduct("meat")}>گوشت</button>
                    <button onClick={() => filterProduct("food")}>غذا</button>
                    <button onClick={() => filterProduct("daily")}>روزانه</button>

                </div>
                <div className="row">
                    {productData.map(product => {
                        const {id, name, price, rate, category} = product;
                        console.log(product.id)
                        return (
                            <div className="col-12 col-md-6 col-lg-4">
                                <ProductCard id={id} name={name} price={price} rate={rate} category={category}/>
                            </div>
                        )

                    })}


                </div>


            </div>
        </section>
    )
}

export default FeaturedProducts