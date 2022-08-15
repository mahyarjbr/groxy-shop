import styles from "./header.module.css";
import Navbar from "../../components/navbar/Navbar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


function Header({mainRoute}){
    return(
        <header className={styles.header}>
            <img className={styles.header_sideImage} src="/images/side1.png" alt=""/>
            <div className="container">

                <Navbar  />

            </div>
            <div className="hero">
                <div className="container">
               <img className={styles.hero_image} src="images/side4.png" />
                  <div className={styles.wrapper}>
                      <div className={styles.links}>
                          <Link href={"/"}><a className={styles.link}>خانه</a></Link>
                          <FontAwesomeIcon icon={faArrowLeft} />
                          <Link href={"#"}><a className={styles.link}>{mainRoute.name}</a></Link>
                          <h1>درباره ما</h1>
                      </div>

                  </div>
                </div>
            </div>
        </header>
    )
}
export default Header