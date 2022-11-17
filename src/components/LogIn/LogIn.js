import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import * as yup from 'yup';

const schema = yup.object().shape({
    email:yup.string().required("This field is required"),
    password: yup.string().min(6).max(16).required("This field is required"),
});


export const LogIn = () => {
    const dispatch = useDispatch()
    const handleSubmitForm = (values, {resetForm}) => {
       dispatch(logIn(values));
       resetForm();
}
    return (
        <Formik initialValues={{ email: '', password: '' }} validationSchema={ schema } onSubmit={handleSubmitForm}>
            <Form>
                <label htmlFor="email">
                    Email
                    <Field id="email" type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email"/>
                </label>
                <label htmlFor="password">
                    Password
                    <Field id="password" type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password"/>
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}