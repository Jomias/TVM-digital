import React from 'react'
import styles from '../../assets/modules/whychooseus.module.css'
import Circle from '../../assets/images/circle.png'

const Definition = () => {
    return (
        <section id="definition" className={`${styles.section} ${styles.definition}`}>
            <div className={`container`}>
                <div className="row justify-content-center">
                    <div className={styles.definition}>
                        <h2 className={styles.h2}>WHAT IS BLOCKCHAIN?</h2>
                        <ul>
                            <li>
                                Blockchain is a system of recording information in a way that
                                makes it difficult or imposile to change, hack, or cheat the
                                system.
                            </li>
                            <li>
                                A Block chain is essentially a digital of transactions that is
                                duplicatd and distributed across the entire of computer systems on
                                the blockchain. Each block in the chain contains a number of
                                transactions, and every time a new transaction occurs on the
                                blockchain, a record of that transaction is added to every
                                participants ledger. The decentralises database managed by mutiple
                                partic pants is known as Distributed Ledger Technology (DLT).
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="DLT" className={`row justify-content-center ${styles.DLT}`}>
                    <div className="col-12">
                        <h3 className={styles.h3}>The properties of Distributed Ledger Technology (DLT)</h3>
                    </div>
                    <div className="col-xl-3">
                        <div className={`${styles.DLT_item}`}>
                            <h4 className={styles.h4}>Programmable</h4>
                            <p>A blockchain is programmable (i.e.Smart Contracts)</p>
                        </div>
                        <div className={`${styles.DLT_item} mt-xl-5`}>
                            <h4 className={styles.h4}>Secure</h4>
                            <p>All records are individually encrypted</p>
                        </div>
                        <div className={`${styles.DLT_item} mt-xl-5`}>
                            <h4 className={styles.h4}>Anonymous</h4>
                            <p>
                                The identity of participants is either anonymous or pseudonymous
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                        <img
                            src={Circle}
                            alt="Circle"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-xl-3">
                        <div className={`${styles.DLT_item}`}>
                            <h4 className={styles.h4}>Distributed</h4>
                            <p>
                                All network participants have a copy of the ledger for complete
                                transparency
                            </p>
                        </div>
                        <div className={`${styles.DLT_item} mt-xl-4`}>
                            <h4 className={styles.h4}>Immutable</h4>
                            <p>Any validated records are irreversible and cannot be changed</p>
                        </div>
                        <div className={`${styles.DLT_item} mt-xl-5`}>
                            <h4 className={styles.h4}>Time-stamped</h4>
                            <p>
                                The identity of participants is either anonymous or pseudonymous
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 text-xl-center">
                        <div className={`${styles.DLT_item}`} width="100%">
                            <h4 className={`${styles.h4} ${styles.temp}`}>Unanimous</h4>
                            <p>
                                All network participants agree to the validity of each the records
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Definition;