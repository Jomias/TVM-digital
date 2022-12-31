import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import styles from '../assets/modules/navbar.module.css'
import HeaderContext from '../context/PageContext';

const Navbar = () => {

    const { path } = useContext(HeaderContext);
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${((path === '/' || path === '/ourteam') && styles.transNav) || (`bg-white ${styles.whiteNav}`)}`}>
            <Link to="/" className="navbar-brand pt-3 pb-1">
                {/* Logo Image */}
                <img src={logo} alt="logo" className={styles.logo} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item align-self-lg-center text-lg-center mx-lg-3">
                        <Link to="/whychooseus" className="nav-link">
                            WHY CHOOSE US
                        </Link>
                    </li>
                    <li className="nav-item align-self-lg-center text-lg-center mx-lg-3">
                        <Link to="/industries" className="nav-link">
                            INDUSTRIES
                        </Link>
                    </li>
                    <li className="nav-item align-self-lg-center text-lg-center mx-lg-3">
                        <Link to="/works" className="nav-link">
                            WORKS
                        </Link>
                    </li>
                    <li className="nav-item align-self-lg-center text-lg-center mx-lg-3">
                        <Link to="/ourteam" className="nav-link">
                            OUR TEAM
                        </Link>
                    </li>
                    <li className="nav-item align-self-lg-center text-lg-center mx-lg-3">
                        <Link to="/contact" className="nav-link">
                            CONTACT
                        </Link>
                    </li>
                    <li className="nav-item align-self-lg-center text-lg-center ml-lg-3">
                        <Link to="/*" className="nav-link">
                            ENG/VN
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;