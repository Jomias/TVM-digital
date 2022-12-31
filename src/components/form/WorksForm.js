import React, { useContext } from 'react'
import styles from '../../assets/modules/works.module.css'
import FormContext from '../../context/FormContext'

const WorksForm = () => {

  const { handleChange, handleSubmit, values, errors, countSubmit } = useContext(FormContext);

  return (
    <section id="getIdea" className={styles.getIdea}>
      <div className="container">
        <form action="">
          <h3>Get estimate for your app idea. We do not spam.</h3>
          <div className={`row ${styles.row}`}>
            <div className="col-md-6">
              <input
                className={`${countSubmit > 0 && errors.name && "inputError"}`}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
              />
              {countSubmit > 0 && errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="col-md-6">
              <input
                className={`${countSubmit > 0 && errors.email && "inputError"}`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              {countSubmit > 0 && errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="col-md-6">
              <input
                className={`${countSubmit > 0 && errors.phone && "inputError"}`}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
              />
              {countSubmit > 0 && errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={values.company}
                onChange={handleChange}
              />
              {countSubmit > 0 && errors.company && <span className="error">{errors.company}</span>}
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="col-12">
              <textarea
                className={`${countSubmit > 0 && errors.message && "inputError"}`}
                name="message"
                id="message"
                cols={1}
                rows={5}
                placeholder="Tell us about your requirement"
                value={values.message}
                onChange={handleChange}
              />
              {countSubmit > 0 && errors.message && <span className="error">{errors.message}</span>}
            </div>
          </div>
          <div className={`form-check ${styles.formCheck}`}>
            <input
              type="checkbox"
              className="form-check-input"
              id="agree"
            />
            <label className="form-check-label" htmlFor="agree">
              Send me the signed Non-Disclosure Agreement
            </label>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="col-12">
              <button type="submit" className="btn btn-primary rounded-0" onClick={handleSubmit}>
                Get an estimate
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>

  )
}

export default WorksForm;