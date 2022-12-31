import React from 'react'
import styles from '../../../assets/modules/homepage.module.css'
import Co_op_1 from '../../../assets/images/co-op-1.png'
import Co_op_2 from '../../../assets/images/co-op-2.png'
import Co_op_3 from '../../../assets/images/co-op-3.png'
import Coop from '../../../assets/images/cooperation.png'
const Cooperation = () => {
  return (
    <div className={`container ${styles.cooperation}`}>
      <h2 className={styles.h2}>WE ARE AWLAYS LOOKING FOR COOPERATION FOR MUTUAL DEVELOPMENT</h2>
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-6">
          <div className="row mb-4">
            <div className="col-2 m-auto">
              <img
                src={Co_op_1}
                alt={1}
                className="img-fluid"
              />
            </div>
            <div className="col-10 m-auto">
              <p>
                With partners to bring to market high quality high tect
                products
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 m-auto">
              <img
                src={Co_op_2}
                alt={2}
                className="img-fluid"
              />
            </div>
            <div className="col-10 m-auto">
              <p className="align-self-center">
                Promote and support appropriate startup ideas in the
                blockchain field
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 m-auto">
              <img
                src={Co_op_3}
                alt={3}
                className="img-fluid"
              />
            </div>
            <div className="col-10 m-auto">
              <p className="align-self-center">
                With the businesses to help them get produtcs suitable for
                business requirements
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5">
          <img
            src={Coop}
            alt="CO-OP"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  )
}

export default Cooperation;