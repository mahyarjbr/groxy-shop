import styles from "./navbar.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark, faSearch, faUser, faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import {useState,useRef,useEffect} from "react";
import ClickAwayListener from 'react-click-away-listener';


function Navbar() {
    const [showNav, setShowNav] = useState(false)

    const ref=useRef()

    const handleShowNav = () => {

        setShowNav(!showNav)



    }
    const handleBg=(event) =>{
        if(ref.current.contains(event.target)){
            return
        }
        setShowNav(false)

    }


    return (
        <nav className={styles.nav}>

            <div className="d-flex pr-0 align-items-center flex-wrap">
                <div onClick={handleShowNav} className={styles.hamburger}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>

                    <div onClick={handleBg} className={showNav ? styles.nav_wrapper : null}>
                    </div>
                        <ul ref={ref} className={showNav ? `${styles.nav_items} ${styles.nav_active}` : `${styles.nav_items}`}>
                            <li className={styles.nav_item}><Link href="/"><a
                                className={styles.nav_link}>خانه</a></Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href="/about"><a className={styles.nav_link}>درباره</a></Link>
                            </li>
                            <li className={styles.nav_item}><Link href="/shop"><a
                                className={styles.nav_link}>خرید</a></Link>
                            </li>
                            <li className={styles.nav_item}><Link href="/pages"><a
                                className={styles.nav_link}>صفحات</a></Link>
                            </li>
                            <li className={styles.nav_item}><Link href="/blog"><a
                                className={styles.nav_link}>وبلاگ</a></Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href="/contact"><a className={styles.nav_link}>تماس با ما</a></Link>
                            </li>
                            <FontAwesomeIcon className={styles.close} icon={faXmark}/>
                        </ul>


            </div>
            <ul className={styles.nav_social}>
                <li className={styles.nav_social__item}>
                    <Link href="/#"><a className={styles.nav_social__link}><FontAwesomeIcon icon={faSearch}/></a></Link>
                </li>
                <li className={styles.nav_social__item}>
                    <Link href="#"><a className={styles.nav_social__link}><FontAwesomeIcon icon={faUser}/></a></Link>
                </li>
                <li className={styles.nav_social__item}>
                    <Link href="#"><a className={styles.nav_social__link}
                    ><FontAwesomeIcon icon={faHeart}/>
                    </a></Link>
                </li>
                <li className={styles.nav_social__item}>
                    <Link href="#"><a className={styles.nav_social__link}
                    ><FontAwesomeIcon icon={faCartShopping}/></a></Link>
                </li>
            </ul>

            <img className={styles.header_logo} src="images/logo.png" alt="logo"/>
        </nav>
    )
}

export default Navbar;