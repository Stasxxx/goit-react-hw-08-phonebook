import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    ).required("This field is required"),
    email:yup.string().required("This field is required"),
    password: yup.string().min(6).max(16).required("This field is required"),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmitForm = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    }

    return (
        <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={schema} onSubmit={handleSubmitForm}>
            <Form>
                <label htmlFor="username">
                    Username
                    <Field id="username" tape="text" name="name" placeholder="name" />
                    <ErrorMessage name="name" />
                </label>
                <label htmlFor="email">
                    Email
                    <Field id="email" type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" />
                </label>
                <label htmlFor="password" >
                    Password
                    <Field id="password" type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};