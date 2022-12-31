import React, { useState } from 'react'
import styles from '../../assets/modules/homepage.module.css';
import defaultData from '../../data/defaultData.json'
import Bulb from '../../assets/images/bulb.png'
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';

const Partners = () => {
    const getElement = (partner, index) => {
        let classN = '';
        if (index % 3 === 0) classN = `${styles.content} ${styles.partner_1}`;
        if (index % 3 === 1) classN = `${styles.content} ${styles.partner_2}`;
        if (index % 3 === 2) classN = `${styles.content} ${styles.partner_3}`;
        return (
            <div className="col-md-6 col-lg-4 mb-5" key={partner.id}>
                <div className={classN}>
                    <img src={Bulb} alt="Bulb" />
                    <div className={`text text-center ${styles.txt}`}>
                        <h6 className={`text-left pl-5 ${styles.h6}`}>{partner.name}</h6>
                        <p>{partner.paragraph}</p>
                        <Link to="/*" className="btn rounded-0">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const [numItem, setNumItem] = useState(3);
    const [hidden, setHidden] = useState(false);
    const path = 'http://localhost:3500/partners';
    const { list } = useData(path, defaultData.partners, 'Partners', getElement);

    const handleClick = (e) => {
        e.preventDefault();
        if (numItem + 3 >= list.length) {
            setHidden(true);
        }
        setNumItem(prevNumItem => Math.min(prevNumItem + 3, parseInt(list.length)));
    }


    return (
        <section id="partners" className={styles.partners}>
            <div className="container">
                <h2 className={styles.h2}>OUR PARTNER</h2>
                <div className={`row ${styles.partner} ${styles.height}`}>
                    {list.slice(0, numItem)}
                </div>
                <div>
                    <Link to="/*"
                        className={`btn btn-default extend-btn rounded-0 ${styles.extendButton}`}
                        onClick={handleClick}
                        hidden={hidden}
                    >
                        VIEW MORE
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Partners;