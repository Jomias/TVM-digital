import React, { useContext } from 'react'
import styles from '../../assets/modules/contact.module.css'
import FormContext from '../../context/FormContext'

const ContactForm = () => {

    const { handleChange, handleSubmit, values, errors, countSubmit } = useContext(FormContext);

    return (
        <div className="col-md-6">
            <div className={styles.rightSite}>
                <input
                    className={`${countSubmit > 0 && errors.name && "inputError"}`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    autoFocus={false}
                />
                {countSubmit > 0 && errors.name && <span className="error">{errors.name}</span>}
                <input
                    className={`${countSubmit > 0 && errors.email && "inputError"}`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                {countSubmit > 0 && errors.email && <span className="error">{errors.email}</span>}
                <input
                    className={`${countSubmit > 0 && errors.phone && "inputError"}`}
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                />
                {countSubmit > 0 && errors.phone && <span className="error">{errors.phone}</span>}
                <input
                    className={`${countSubmit > 0 && errors.company && "inputError"}`}
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={values.company}
                    onChange={handleChange}
                />
                {countSubmit > 0 && errors.company && <span className="error">{errors.company}</span>}
                <textarea
                    className={`${countSubmit > 0 && errors.message && "inputError"}`}
                    name="message"
                    cols={1}
                    rows={5}
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                />
                {countSubmit > 0 && errors.message && <span className="error">{errors.message}</span>}
                <button type="submit" className="btn btn-primary rounded-0" onClick={handleSubmit}>
                    SEND
                </button>
            </div>
        </div>
    )
}

export default ContactForm;