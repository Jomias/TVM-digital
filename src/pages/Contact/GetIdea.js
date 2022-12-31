import React from 'react'
import styles from '../../assets/modules/contact.module.css'
import ContactForm from '../../components/form/ContactForm';

const GetIdea = () => {
    return (
        <>
            {/*SUBMIT IDEA */}
            <section id="getIdea" className={styles.getIdea}>
                <div className={`container`}>
                    <form action="">
                        <div className={`row ${styles.row}`}>
                            <h3>Get estimate for your app idea. We do not spam.</h3>
                            <div className="col-md-6">
                                <div className={styles.leftSite}>
                                    <h3>Sydney</h3>
                                    <p>417/165 Phillip St Sydney NSW 2000 Australia</p>
                                    <p>1300 028 808</p>
                                    <p>Int. +61 2 8776 3849</p>
                                    <p>sales@block8.com</p>
                                    <h3>Chandigarh</h3>
                                    <p>Rajiv Gandhi Chandigarh Technology Park,</p>
                                    <p>Manimajra, Chandigarh, 160101, India</p>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </form>
                </div>
            </section>
            {/*/.END SUBMIT IDEA*/}
        </>
    )
}

export default GetIdea;