
import { useState, useEffect } from "react";

const getFormValues = () => {
    const storedValues = localStorage.getItem('form');
    if (!storedValues) {
        return {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
        }
    }
    return JSON.parse(storedValues);
}

const useForm = (callback, validate) => {
    const [values, setValues] = useState(getFormValues());
    const [errors, setErrors] = useState(validate(getFormValues()));
    const [countSubmit, setCountSubmit] = useState(0);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    useEffect(() => {
        setErrors(validate(values));
    }, [values, validate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCountSubmit(prev => prev + 1);
        if ( (countSubmit === 0 && Object.keys(validate(values)).length === 0) || (Object.keys(errors).length === 0 && countSubmit !== 0)) {
            setSuccess(true);
        }
    };

    useEffect(() => {
        if (!success)   return;
        callback();
        setCountSubmit(0);
        setSuccess(false);
    }, [success, callback]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        countSubmit
    };
};

export default useForm;
