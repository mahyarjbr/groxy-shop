import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark, faSearch, faUser, faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar/Navbar"
import AboutUs from "../containers/aboutus/AboutUs";
import Banner from "../containers/banner/Banner";
import Categories from "../containers/categories/Categories";
import TrendProducts from "../containers/trendProduct/TrendProducts";
import Features from "../containers/features/Features";
import FeaturedProducts from "../containers/featuredProducts/FeaturedProducts";
import PrimaryButton from "../components/buttons/Buttons";
import HomeHeader from "../containers/headers/HomeHeader";
import {Component} from "react";
import Testimonials from "../containers/testimonials/Testimonials";
import Footer from "../containers/footer/Footer";




class Home extends Component{



    render() {




        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>



                    <HomeHeader    />


                    <main>

                        <Categories/>

                        <TrendProducts/>


                        <Banner/>


                        <AboutUs/>

                        <Features/>

                        <FeaturedProducts/>

                        <Testimonials />
                    </main>


                  <Footer />


                    <script src="js/bootstrap.bundle.min.js"></script>
                    <script src="js/app.js"></script>
                </>
                )
                }
                }

                export default Home
