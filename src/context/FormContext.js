import { createContext } from "react";
import useForm from "../hooks/useForm";
import validateInfo from "../utils/validateInfo";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {

    const { handleChange, handleSubmit, values, errors, countSubmit } = useForm(submit, validateInfo);

    function submit() {
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('form', JSON.stringify(values));
            alert("Submitted Succesfully");
        }
    }

    return (
        <FormContext.Provider value={{ handleChange, handleSubmit, values, errors, countSubmit }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;