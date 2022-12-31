import React from 'react'
import SlideShow from '../../components/UI/SlideShow'
import Cooperation from './Welcome/Cooperation';
import WelcomPrg from './Welcome/WelcomPrg';
import styles from '../../assets/modules/homepage.module.css'

const Welcome = () => {
    return (
        <section id="welcome" className={styles.welcome}>
            <div className="jumbotron jumbotron-fluid">

                {/* Welcome Paragraph */}
                <WelcomPrg />
                {/* End Welcome Paragraph */}

                {/* Slide Show */}
                <SlideShow />
                {/* End Slide Show */}

                {/* Cooperation */}
                <Cooperation />
                {/* Cooperation */}
            </div>
        </section>
    )
}

export default Welcome;