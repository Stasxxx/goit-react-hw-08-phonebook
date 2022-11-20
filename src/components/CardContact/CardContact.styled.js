import styled from "styled-components";
import Button from '@mui/material/Button';



export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
border-radius: 4px;
box-shadow: 0px 5px 10px 2px rgba(79, 166, 232, 0.2);

    &:hover {
        box-shadow: 0px 5px 10px 12px rgba(139, 192, 232, 0.2);
    }
`;

export const ContactName = styled.div`
margin-right: 10px;
font-size: 18px;
line-height: 1.17;
letter-spacing: 0.01em;
`;

export const ButtonMUI = styled(Button)`
    width: 100px;
    height: 30px; 
`;