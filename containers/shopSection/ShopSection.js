import {Component} from "react";
import styles from "./shopSection.module.css"
import ProductCard from "../../components/productCard/ProductCard";

class ShopSection extends Component{
    render(){
        return(
            <section className={styles.shop}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                         <div className={styles.rightWrapper}>
                             <select className="form-select" aria-label="Default select example">
                                 <option selected>Open this select menu</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                             </select>
                         </div>
                         <div className="row">
                             <div className="col-lg-4">
                                 <ProductCard />
                             </div>

                         </div>

                        </div>
                        <div className="col-lg-2">
                            <div className={styles.leftWrapper}>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        )
    }
}
export default ShopSection