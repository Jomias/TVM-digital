import React, { useEffect, useState } from 'react'
import styles from '../../assets/modules/ourteam.module.css'
import defaultData from '../../data/defaultData.json'


const TopReasons = () => {

    const getElement = (item) => {
        return (
            <div className={`col-md-4 ${styles.reason}`} key={item.id}>
                <div className={styles.pic}>
                    <img
                        src={item.imgURL}
                        alt="Top-icon"
                        className="img-fluid"
                    />
                </div>
                <p>{item.paragraph}</p>
            </div>
        )
    }
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        setListItem(prevListItem => defaultData.topReasons.map((item, index) => { return getElement(item, index) }));
    }, []);

    return (
        <section id="top-reasons" className={styles.topReasons}>
            <div className={`container`}>
                <div className="row">
                    {listItem}
                </div>
            </div>
        </section>
    )
}

export default TopReasons