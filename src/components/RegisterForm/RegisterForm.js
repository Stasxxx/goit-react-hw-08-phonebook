import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { ButtonMUI, Label, Input, Container, Div } from "./RegisterForm.styled";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from '@mui/icons-material/Send';
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
                <Container>
                    <Label htmlFor="username">
                        Username
                        <Input id="username" tape="text" name="name" placeholder="name" />
                        <ErrorMessage name="name" />
                    </Label>
                    <Label htmlFor="email">
                        Email
                        <Input id="email" type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" />
                    </Label>
                    <Label htmlFor="password" >
                        Password
                        <Input id="password" type="password" name="password" placeholder="password" />
                        <ErrorMessage name="password" />
                    </Label>
                </Container>
                <Div>
                    <Tooltip >
                        <ButtonMUI type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>Register</ButtonMUI>
                    </Tooltip>
                </Div>
                {/* <button type="submit">Register</button> */}
            </Form>
        </Formik>
    );
};