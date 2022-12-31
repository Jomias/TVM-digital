import React from 'react'
import defaultData from '../../data/defaultData.json'
import { Link } from "react-router-dom";
import useIntroduce from '../../hooks/useIntroduce';
import styles from '../../assets/modules/introduce.module.css'

const Introduce = (props) => {
    const { title, paragraph, imgURL } = useIntroduce(props.Page, defaultData.introduce);
    return (
        <article id="introduce" className={styles.introduce}>
            <div className={`container`}>
                <div className="row">
                    <div className="col-lg-5">
                        <div className={styles.content}>
                            <h1>{title}</h1>
                            <div className={styles.details}>
                                <p>
                                    {paragraph}
                                </p>
                            </div>
                            <Link to="/contact" type="button" className="btn rounded-0">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.picture}>
                            <img src={imgURL} alt="introduce" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Introduce