import React from 'react'
import styles from '../../assets/modules/banner.module.css'

const Banner = (props) => {

    return (
        <>
            {props.Page === 'whychooseus' &&
                <section className={`${styles.banner} ${styles.section} ${styles.whychooseus}`}>
                    <div className={styles.contentWCS}>
                        <div className={`container`}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-left d-none d-md-block">
                                        We respond with all IT solutions for customer issues and
                                        innovation
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p>
                                                From system desgin, development and operation. Since we are
                                                able to consistently carry out all phases of development, you
                                                can consult us about everything. With application development
                                                technology, IT infrastructure system construction technology,
                                                embedded technology, and advanced technology as the core, we
                                                support IT solutions to solve customer problems.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {props.Page === 'contact' &&
                <section className={`${styles.banner} ${styles.contact} ${styles.section}`}>
                    <div className={styles.contentCT}>
                        <h1>CONTACT US</h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, animi
                            optio repellat culpa dolorem, cumque sunt at assumenda quam quibusdam
                            corrupti et enim est exercitationem vero id quia totam!
                        </p>
                    </div>
                </section>
            }
        </>
    )
}

export default Banner;