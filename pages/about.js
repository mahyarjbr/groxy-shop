import {Component} from "react";
import Head from "next/head";
import Testimonials from "../containers/testimonials/Testimonials";
import Footer from "../containers/footer/Footer";
import Header from "../containers/headers/Header";
import SecondaryBanner from "../containers/banner/SecondaryBanner";
import SecondaryTestimonial from "../containers/testimonials/SecondaryTestimonial";
import SecondaryFeatures from "../containers/features/SecondaryFeatures";
import VideoSection from "../containers/video/VideoSection";

class About extends Component{
    render(){
        return(
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <Header mainRoute={{url:"about",name:"درباره ما"} } />
                <SecondaryBanner />
                <SecondaryTestimonial />
                {/*<VideoSection />*/}

                <SecondaryFeatures/>


                <main>
                    <Testimonials />
                </main>
                <Footer />


            </>
        )
    }
}

export default About