import { nameRegex, phoneRegex, emailRegex } from "../data/regex";

export default function validateInfo(values) {

    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }
    else if (!nameRegex.test(values.name)) {
        errors.name = 'Name is invalid';
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!emailRegex.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.phone) {
        errors.phone = 'Phone is required';
    } else if (!phoneRegex.test(values.phone)) {
        errors.phone = 'Phone is invalid';
    }

    if (!values.company) {
        errors.company = 'Company is required';
    }

    if (!values.message) {
        errors.message = 'Message is required';
    }

    return errors;
}