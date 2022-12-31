import React, {useContext} from 'react'
import styles from '../assets/modules/footer.module.css'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import twitterIcon from '../assets/images/twitter-icon.png'
import inIcon from '../assets/images/in-icon.png'
import PageContext from '../context/PageContext';

const Footer = () => {
    const { path } = useContext(PageContext);
    const list = ['/', '/ourteam', '/industries', '/whychooseus', '/works', '/contact'];
    if (!list.includes(path)) {
        return <></>
    }
    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* NAVBAR*/}
                <nav className={`navbar navbar-expand-lg navbar-light bg-white + ${styles.footerNav}`}>
                    <Link to="/" className="navbar-brand pt-3 pb-1">
                        {/* Logo Image */}
                        <img
                            src={logo}
                            alt="logo"
                            className={styles.logo}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-lg-1">
                                <Link to="/whychooseus" className="nav-link">
                                    WHY CHOOSE US
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-2">
                                <Link to="/industries" className="nav-link">
                                    INDUSTRIES
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-2">
                                <Link to="/works" className="nav-link">
                                    WORKS
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-2">
                                <Link to="/ourteam" className="nav-link">
                                    OUR TEAM
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-2">
                                <Link to="/contact" className="nav-link">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            012345XXXXXX
                            <Link to="/*">
                                <img src={twitterIcon} alt="Instagram Icon" className={styles.icon} />
                            </Link>
                            <Link to="/*">
                                <img src={inIcon} alt="Twitter Icon" className={styles.icon} />
                            </Link>
                        </span>
                    </div>
                </nav>
                {/*/.END NAVBAR*/}
            </div>
        </footer>

    )
}

export default Footer;