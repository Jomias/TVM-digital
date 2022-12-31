import React, { useState } from 'react'
import styles from '../../assets/modules/works.module.css'
import useData from '../../hooks/useData';
import defaultData from '../../data/defaultData.json'
import { Link } from 'react-router-dom';

const Recents = () => {
    const getElement = (recent) => {
        return (
            <div className="col-12 col-sm-6 col-md-4 mb-5" key={recent.id}>
                <div className={styles.recentPic}>
                    <img
                        src={recent.imgURL}
                        alt="Projects"
                        className="img-fluid"
                    />
                </div>
                <span>{recent.des}</span>
                <p>{recent.paragraph}</p>
                <span className="link">
                    <Link to="/*">Read More</Link>
                </span>
            </div>
        )
    }

    const path = 'http://localhost:3500/recents';
    const {list} = useData(path, defaultData.recents, 'Recent Projects', getElement)
    const [numItem, setNumItem] = useState(6);
    const [hidden, setHidden] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (numItem + 3 >= list.length) {
            setHidden(true);
        }
        setNumItem(prevNumItem => Math.min(prevNumItem + 3, parseInt(list.length)));
    }

    return (
        <section id="recent-projects" className={styles.recents}>
            <div className={`container`}>
                <h2>RECENT PROJECTS</h2>
                <div className={`row ${styles.recentItem}`}>
                    {list.slice(0, numItem)}
                </div>
                <div className={`justify-content-center ${hidden ? 'd-none' : 'd-flex'}`}>
                    <button
                        type="button"
                        className={`btn rounded-0 d-flex justify-content-center ${styles.load}`}
                        onClick={handleClick}
                    >
                        LOAD MORE
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Recents;