import React from 'react'
import styles from '../../assets/modules/contact.module.css'

const Subscribe = () => {
    return (
        <section id="subscribe" className={styles.subscribe}>
            <div className={styles.content}>
                <h3 className="d-none d-md-block">Subscribe to our Newsletter</h3>
                <p className="d-none d-sm-block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, ipsa,
                    laboriosam doloribus dicta corrupti reiciendis suscipit facere eius
                    inventore nesciunt ullam sed excepturi laborum in quaerat libero
                    reprehenderit tempora rerum.
                </p>
                <div className={styles.but}>
                    <button>SUBSCRIBE NOW</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;