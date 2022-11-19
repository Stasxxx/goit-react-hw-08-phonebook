import { Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { ButtonMUI, Label,Container, Input, Div } from "./LogIn.styled";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from '@mui/icons-material/Send';
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
                <Container>
                    <Label htmlFor="email">
                        Email
                        <Input id="email" type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email"/>
                    </Label>
                    <Label htmlFor="password">
                        Password
                        <Input id="password" type="password" name="password" placeholder="password" />
                        <ErrorMessage name="password"/>
                    </Label>
                </Container>
                <Div>
            <Tooltip >
                    <ButtonMUI type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>Log In</ButtonMUI>
            </Tooltip>
                </Div>
            </Form>
        </Formik>
    )
}