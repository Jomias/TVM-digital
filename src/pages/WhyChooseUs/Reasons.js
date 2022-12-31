import React from 'react'
import styles from '../../assets/modules/whychooseus.module.css'
import useData from '../../hooks/useData';
import defaultData from '../../data/defaultData.json'

const Reasons = () => {
    const getElement = (reason, index) => {
        let className = '';
        if (index % 3 === 0) className = `col-sm-6 col-md-4 pr-lg-5 pr-xl-5 mb-3 ${styles.reason}`;
        if (index % 3 === 1) className = `col-sm-6 col-md-4 px-lg-4 px-xl-4 mb-3 ${styles.reason}`;
        if (index % 3 === 2) className = `col-sm-6 col-md-4 pl-lg-5 pl-xl-5 mb-3 ${styles.reason}`;
        return (
            <div className={className} key={reason.id}>
                <div className={styles.pic}>
                    <img
                        src={reason.imgURL}
                        alt="reason-icon"
                        className="img-fluid"
                    />
                </div>
                <h4 className={styles.h4}>{reason.name}</h4>
                <p>{reason.paragraph}</p>
            </div>
        )
    }

    const path = 'http://localhost:3500/reasons';
    const { list } = useData(path, defaultData.reasons, 'Reasons', getElement)


    return (
        <section id="reasons" className={`reasons ${styles.section}`}>
            <div className={`container`}>
                <div className="row">
                    <div className="col-12">
                        <h2 className={styles.h2}>REASONS YOU SHOULD BE CONSIDERING BLOCKCHAIN</h2>
                    </div>
                    {list}
                </div>
            </div>
        </section>
    )
}

export default Reasons;