import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../assets/modules/industries.module.css';
import defaultData from '../../data/defaultData.json'
import useData from '../../hooks/useData';

const IndustriesList = () => {

    const getElement = (industry, index) => {
        if (index % 2 === 0) {
            return (
                <section className={`${industry.className} ${styles.section}`} key={industry.id}>
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className={`col-lg-6 ${styles.first}`}>
                            <div className={styles.picture}>
                                <img
                                    src={industry.imgURL}
                                    alt={industry.alt}
                                />
                            </div>
                        </div>
                        <div className={`col-lg-6 ${styles.second}`}>
                            <div className={styles.description}>
                                <div className={styles.bulb}></div>
                                <p>
                                    our <span>industries</span>
                                </p>
                                <h2>{industry.name}</h2>
                                <p>{industry.paragraph}</p>
                                <Link to="/*" type="button" className="btn rounded-0">
                                    LEARN MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        return (
            <section className={`${industry.className} ${styles.section}`} key={industry.id}>
                <div className={`row ${styles.left_to_right}`}>
                    <div className={`col-lg-6 ${styles.first}`}>
                        <div className={styles.ltrDescription}>
                            <div className={styles.ltrBulb}></div>
                            <p>
                                our <span>industries</span>
                            </p>
                            <h2>{industry.name}</h2>
                            <p>{industry.paragraph}</p>
                            <Link to="/*" type="button" className="btn rounded-0">
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                    <div className={`col-lg-6 ${styles.second}`}>
                        <div className={styles.picture}>
                            <img src={industry.imgURL} alt={industry.alt} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const path = 'http://localhost:3500/industries';
    const { list } = useData(path, defaultData.industries, '', getElement)

    return (
        <article id="ourIndustries" className={styles.ourIndustries}>
            <div className={`container`}>
                {list}
            </div>
        </article>
    )
}

export default IndustriesList;