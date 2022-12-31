import React from 'react'
import styles from '../../assets/modules/header.module.css'
import Welcome from './Welcome.js';
import JoinWithUs from './JoinWithUs';
import Research from './Research';
import Services from './Services';
import Partners from './Partners';
import usePath from '../../hooks/usePath';


const HomePage = () => {
    usePath(window.location.pathname);
    return (
        <main className={styles.main}>
            {/* Welcome Section */}
            <Welcome />
            {/* End Welcome Section */}

            {/* Services Section */}
            <Services />
            {/* End Services Section */}

            {/* Research Section */}
            <Research />
            {/* End Research Section */}

            {/* Partners Section */}
            <Partners />
            {/* End Partners Section */}

            {/* JoinWithUs Section */}
            <JoinWithUs />
            {/* End JoinWithUs Section */}
        </main>
    )
}

export default HomePage;