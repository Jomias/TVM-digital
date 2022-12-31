import React from 'react'
import styles from '../../assets/modules/ourteam.module.css'
import In_icon from '../../assets/images/in-icon.png'
import Twitter_icon from '../../assets/images/twitter-icon.png'
import useData from '../../hooks/useData';
import defaultData from '../../data/defaultData.json'
import { Link } from 'react-router-dom';

const Leaders = () => {

    const getElement = (leader) => {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={leader.id}>
                <div className="profile-card shad">
                    <div className="card border-secondary rounded-0">
                        <div className={`card-body ${styles.cardBody}`}>
                            <div className={`user-box ${styles.userBox}`}>
                                <img src={leader.imgURL} alt="profile-img" />
                            </div>
                            <h4 className="mb-1">{leader.name}</h4>
                            <h6>{leader.position}</h6>
                            <p>
                                <Link to="/*">
                                    <img src={In_icon} alt="In-icon" />
                                </Link>
                                <Link to="/*">
                                    <img
                                        src={Twitter_icon}
                                        alt="Twitter-icon"
                                    />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const path = 'http://localhost:3500/leaders';
    const { list } = useData(path, defaultData.leaders, 'Leader Team', getElement)
    return (
        <section id="leader-team" className={styles.leaderTeam}>
            <div className={`container text-center`}>
                <h2>LEADER TEAM</h2>
                <h4>
                    Our team is up of product, business and technology experts who are
                    passionate about the future of blockchain technology.
                </h4>
                <div className="row">
                    {list}
                </div>
            </div>
        </section>
    )
}

export default Leaders