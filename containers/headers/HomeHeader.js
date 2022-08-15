import styles from "./homeHeader.module.css"
import Navbar from "../../components/navbar/Navbar"
import PrimaryButton from "../../components/buttons/Buttons"

function HomeHeader(){

 return(
   <header className={styles.header}>
                 <img className={styles.header_sideImage} src="/images/side1.png" alt=""/>
                 <div className="container">

                     <Navbar  />

                 </div>
                 <div className="hero">
                     <div className="container">
                         <div className="row">
                             <div className="col-lg-6">
                                 <p className={styles.hero_content1}>به فروشگاه ما خوش آمدید</p>
                                 <h1 className={styles.hero_header}>خرید انلاین برای محصولات تازه</h1>
                                 <p className={styles.hero_content2}>
                                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                     استفاده از طراحان گرافیک است
                                 </p>
                                 <div className={styles.hero_buttons}>
                                   <PrimaryButton>خرید</PrimaryButton>
                                   <PrimaryButton>بیشتر بخوانید</PrimaryButton>

                                 </div>
                             </div>
                             <div className="col-lg-6">
                                 <img className={styles.hero_img} src="images/hero1-removebg-preview.png" alt="hero"/>
                             </div>
                         </div>
                     </div>
                 </div>
             </header>
 )
}

export default HomeHeader;