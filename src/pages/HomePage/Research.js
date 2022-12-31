import React from 'react'
import styles from '../../assets/modules/homepage.module.css';
import Pointer from '../../assets/images/pointer.png'
import Rs from '../../assets/images/research.png'
import { Link } from 'react-router-dom';

const Research = () => {
  return (
    <section id="research" className={styles.research}>
      <div className={`container`}>
        <div className={`text-center ${styles.introduce}`}>
          <h2 className={styles.h2}>REASEARCH AND DEVELOPMENT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <Link to="/*" className="btn rounded-0">
            Discovery <img src={Pointer} alt="Pointer" />
          </Link>
        </div>
        <div className={styles.layer}>
          <div className={`${styles.firstLayer} shadow-lg`}>
            <h3 className={styles.h3}>RESEARCH</h3>
            <h4 className={styles.h4}>Digital Innovation</h4>
            <ul className="pl-4">
              <li>Blockchain payment system.</li>
              <li>Invesment Bank and Blockchain settlement</li>
              <li>Real Estate Payment and management</li>
            </ul>
          </div>
          <div className={`${styles.secondLayer} shadow-lg`}>
            <h3 className={styles.h3}>DEVELOPMENT</h3>
            <h4 className={styles.h4}>Consensus for Settlement</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s , when an type and scrambled specimen book.
            </p>
          </div>
          <div className={styles.thirdLayer}>
            <img
              src={Rs}
              alt="Research"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research;