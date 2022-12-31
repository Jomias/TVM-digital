import React from 'react'
import styles from '../../../assets/modules/homepage.module.css'

const WelcomPrg = () => {
    return (
        <div className={`container justify-content-center ${styles.welcome_text}`}>
            <h2 className={styles.h2}>WELCOME TO BLOCK CHAIN</h2>
            <p>Thank you for visiting us</p>
            <p>
                If you are looking for a partner who is able to do software
                development task professionally, definitely we are your SMART
                decision. Work with us and you won't be dissapointed.
            </p>
        </div>
    )
}

export default WelcomPrg;