import React from 'react'
import styles from '../../assets/modules/homepage.module.css'
import { Link } from 'react-router-dom'
const JoinWithUs = () => {
    return (
        <section id="join-with-us" className={styles.joinWithUs}>
            <div className="container text-center">
                <h2 className={styles.h2}>JOIN WITH US!</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book
                </p>
                <Link to="/*" className={`btn btn-default rounded-0 ${styles.extendButton}`}>
                    JOIN NOW{" "}
                </Link>
            </div>
        </section>
    )
}

export default JoinWithUs