import React, { useContext } from 'react'
import Navbar from './Navbar';
import styles from '../assets/modules/header.module.css'
import { Link } from 'react-router-dom';
import PageContext from '../context/PageContext';

const Header = () => {

    const { path } = useContext(PageContext);
    const list = ['/', '/ourteam', '/industries', '/whychooseus', '/works', '/contact'];
    if (!list.includes(path)) {
        return <></>
    }
    return (
        <header className={
            (path === '/' && styles.header_HomePage) || 
            (path === '/ourteam' && styles.header_OurTeam) || 
            (undefined)
            }>
            <div className={`container ${path === '/' && 'h-100 d-flex flex-column'}`}>
                {/* NAVBAR*/}
                <Navbar />
                {/*/.END NAVBAR*/}
                {path === '/' &&
                    <div className="row flex-fill align-items-center">
                        <div className="col-md-5">
                            <h1 className={`d-none d-sm-block ${styles.h1_HomePage}`}>
                                Develop High-tech products for Enterprise
                            </h1>
                            <p className={styles.p_HomePage}>
                                We provide excellent development services in a wide range off business
                                industries with distributed systems based on Blockchain technology
                            </p>
                            <Link to="/*" className={`btn rounded-0 ${styles.a_HomePage}`}>
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                }
                {path === '/ourteam' &&
                    <div className="row">
                        <div className="col-md-5">
                            <div className={styles.content}>
                                <h1 className={styles.h1_OurTeam}>Our Vision</h1>
                                <p className={styles.p_OurTeam}>We strive to help change the world with Blockchain Technology</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;