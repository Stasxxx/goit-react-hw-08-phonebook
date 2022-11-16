import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

export const LogIn = () => {
    const dispatch = useDispatch()
    const handleSubmitForm = (values, {resetForm}) => {
       console.log(values);
       dispatch(logIn(values));
       resetForm();
}
    return (
        <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmitForm}>
            <Form>
                <label htmlFor="email">
                    Email
                    <Field id="email" type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email"/>
                </label>
                <label htmlFor="password">
                    Password
                    <Field id="password" type="password" name="password" placeholder="password"/>
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}