import React from 'react'
import styles from '../../assets/modules/homepage.module.css';
import defaultData from '../../data/defaultData.json'
import useData from '../../hooks/useData';

const Services = () => {

    const getElement = (service, index) => {
        let className = '';
        if (index % 3 === 0) className = 'col-sm-6 col-md-4 pr-lg-5 pr-xl-5 mb-5 service';
        if (index % 3 === 1) className = 'col-sm-6 col-md-4 px-lg-4 px-xl-4 mb-5 service';
        if (index % 3 === 2) className = 'col-sm-6 col-md-4 pl-lg-5 pl-xl-5 mb-5 service';
        return (
            <div className={className} key={service.id}>
                <div className="pic">
                    <img
                        src={service.imgURL}
                        alt="sv"
                        className="img-fluid"
                    />
                </div>
                <h4 className={styles.h4}>{service.name}</h4>
                <p>{service.paragraph}</p>
            </div>
        )
    }

    const path = 'http://localhost:3500/services';
    const { list } = useData(path, defaultData.services, 'Services', getElement);

    return (
        <section id="services" className={styles.services}>
            <div className={`container`}>
                <div className="row">
                    <div className="col-12">
                        <h2 className={styles.h2}>OUR SERVICES</h2>
                    </div>
                    {list}
                </div>
            </div>
        </section>
    )
}

export default Services