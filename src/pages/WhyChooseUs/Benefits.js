import React from 'react'
import styles from '../../assets/modules/whychooseus.module.css'
import defaultData from '../../data/defaultData.json'
import useData from '../../hooks/useData';

const Benefits = () => {
    const getElement = (benefit, index) => {
        let className = '';
        if (index % 3 === 0) className = `col-md-6 col-lg-4 pr-lg-4 pr-xl-4 ${styles.benefit}`;
        if (index % 3 === 1) className = `col-md-6 col-lg-4 px-lg-3 px-xl-3 ${styles.benefit}`;
        if (index % 3 === 2) className = `col-md-6 col-lg-4 pl-lg-4 pl-xl-4 ${styles.benefit}`;
        return (
            <div className={className} key={benefit.id}>
                <div className={styles.benefitItem}>
                    <div className="row px-3">
                        <div className="col-md-2 mb-3">
                            <div className={styles.benefitPic}>
                                <img
                                    src={benefit.imgURL}
                                    alt="benefit-icon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h5 className={styles.h5}>{benefit.name}</h5>
                            <div className={styles.rec}></div>
                            <p>{benefit.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const path = 'http://localhost:3500/benefits';
    const { list } = useData(path, defaultData.benefits, 'Benefits', getElement)

    return (
        <section id="benefit" className={`${styles.section} ${styles.benefit}`}>
            <div className={`container`}>
                <div className="row">
                    <div className="col-12">
                        <h2 className={styles.h2}>OUR SERVICE - YOUR BENEFITS</h2>
                    </div>
                    {list}
                </div>
            </div>
        </section>
    )
}

export default Benefits