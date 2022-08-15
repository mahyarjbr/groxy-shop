
import {Component} from "react";
import Head from "next/head";
import Header from "../containers/headers/Header";
import ShopSection from "../containers/shopSection/ShopSection";
import Testimonials from "../containers/testimonials/Testimonials";
import Footer from "../containers/footer/Footer";
import ProductDetails from "../containers/productDetails/ProductDetails";




class ProductDetail extends Component{
    render(){
        return(
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <Header mainRoute={{url:"product-detail",name:"جزِئیات محصول"} } />





                <main>
                   <ProductDetails />
                    <Testimonials/>
                </main>
                <Footer/>


            </>
        )
    }
}
export default ProductDetail