import React from 'react'
import styles from '../../assets/modules/whychooseus.module.css'
import useData from '../../hooks/useData';
import defaultData from '../../data/defaultData.json'
import Bulb from '../../assets/images/bulb.png'


const Projects = () => {

    const getElement = (project) => {
        return (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                <div className={styles.projectItem}>
                    <img
                        src={project.imgURL}
                        alt="PJ"
                        className="img-fluid"
                    />
                    <div className={styles.content}>
                        <img src={Bulb} className={styles.bulb} alt="Bulb" />
                        <h6 className={styles.h6}>ABCXYZ</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const path = 'http://localhost:3500/projects';
    const { list } = useData(path, defaultData.projects, 'Projects', getElement)


    return (
        <section id="projects" className={`${styles.Projects} ${styles.section}`}>
            <div className="container">
                <h2 className={styles.h2}>PROJECTS</h2>
                <div className={`row ${styles.row}`} >
                    {list}
                </div>
            </div>
        </section>
    )
}

export default Projects