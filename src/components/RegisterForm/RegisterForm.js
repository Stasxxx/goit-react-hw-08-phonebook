import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email:yup.string().required(),
    password: yup.string().min(6).max(16).required(),
});

export const RegisterForm = () => {
   const handleSubmitForm = (values, {resetForm}) => {
       console.log(values);
       resetForm();
}

    return (
        
        <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={schema} onSubmit={handleSubmitForm}>
            <Form>
                <label htmlFor="username">
                    Username
                    <Field id="username" tape="text" name="name" placeholder="name" />
                    <ErrorMessage name="name"/>
                </label>
                <label htmlFor="email">
                    Email
                    <Field id="email" type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email"/>
                </label>
                <label htmlFor="password" >
                    Password
                    <Field id="password" type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password"/>
                </label>
                    <button type="submit">Register</button>
            </Form>
        </Formik>
        
    )
}