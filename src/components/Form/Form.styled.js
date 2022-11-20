import styled from "styled-components";
import Button from '@mui/material/Button';

export const FormContainer = styled.div`
display: flex;
justify-content: center;
`;

export const InputDiv = styled.div`
/* margin-bottom: 20px; */
`

export const Label = styled.label`
    font-size: 20px;
    line-height: 1.17;
    letter-spacing: 0.01em;
    color: #757575;
    cursor: pointer;
    
    &:last-child {
        margin-left: 10px;
    }
    
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 15px;
    outline: none;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 5px;
    &:hover,
    &:focus {
        border: 1px solid #2196F3;
    }

    &:hover+.form-icon,
    &:focus+.form-icon {
        fill: #2196F3;
    }
`;

export const InputBtn = styled.div`
margin-top:30px;
display: flex;
justify-content: center;
`;

export const ButtonMUI = styled(Button)`
    width: 150px;
    height: 30px;
`;