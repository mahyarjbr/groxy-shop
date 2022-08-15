import Head from "next/head";
import Header from "../containers/headers/Header";
import SecondaryBanner from "../containers/banner/SecondaryBanner";
import SecondaryTestimonial from "../containers/testimonials/SecondaryTestimonial";
import SecondaryFeatures from "../containers/features/SecondaryFeatures";
import Testimonials from "../containers/testimonials/Testimonials";
import Footer from "../containers/footer/Footer";
import React from "react"
import ShopSection from "../containers/shopSection/ShopSection";


class Shop extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <Header mainRoute={{url:"shop",name:"خرید"} } />





                <main>
                    <ShopSection />
                    <Testimonials/>
                </main>
                <Footer/>


            </>
        )
    }
}

export default Shop