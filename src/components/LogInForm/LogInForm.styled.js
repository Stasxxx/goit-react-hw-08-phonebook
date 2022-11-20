import styled from "styled-components";
import { Field } from "formik";
import Button from '@mui/material/Button';

export const Container = styled.div`
margin-top: 110px;
display: flex;
justify-content: center;
`;

export const ButtonMUI = styled(Button)`
    width: 110px;
    height: 30px;    
`;

export const Label = styled.label`
    /* display: block; */
    font-size: 20px;
    line-height: 1.17;
    letter-spacing: 0.01em;
    color: #757575;
    margin-bottom: 15px;
    /* text-align: center; */
    cursor: pointer;
    
    &:first-child {
        margin-right: 20px;
    }
`;

export const Input = styled(Field)`
    width: 300px;
    height: 30px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 15px;
    outline: none;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 10px;
    &:hover,
    &:focus {
        border: 1px solid #2196F3;
    }

    &:hover+.form-icon,
    &:focus+.form-icon {
        fill: #2196F3;
    }
`;

export const Div = styled.div`
margin-top:50px;
display: flex;
justify-content: center;
`