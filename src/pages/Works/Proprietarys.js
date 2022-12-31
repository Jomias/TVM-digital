import React from 'react'
import styles from '../../assets/modules/works.module.css'
import useData from '../../hooks/useData';
import defaultData from '../../data/defaultData.json'
import { Link } from 'react-router-dom';
import Pointer from '../../assets/images/pointer.png'

const Proprietary = () => {
    const getElement = (proprietary) => {
        return (
            <div className="col-6 col-md-4 col-lg-3 mb-4 mb-lg-5" key={proprietary.id}>
                <div className={styles.pic}>
                    <img
                        src={proprietary.imgURL}
                        alt="Projects"
                        className="img-fluid"
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <span>For more information</span>
                            <p>
                                <Link to="/contact">
                                    Contact Us
                                    <img src={Pointer} alt="Pointer" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <p>{proprietary.paragraph}</p>
            </div>
        )
    }

    const path = 'http://localhost:3500/proprietarys';
    const { list } = useData(path, defaultData.proprietarys, 'Proprietary Projects', getElement)

    return (

        <section id="proprietary-projects" className={styles.proprietary}>
            <div className={`container`}>
                <h2>PROPRIETARY-PROJECTS</h2>
                <div className="row">
                    {list}
                </div>
            </div>
        </section>

    )
}

export default Proprietary;