import PropTypes from 'prop-types';
import { Container, ButtonMUI, ContactName } from "./CardContact.styled";
import { deleteContact } from "redux/contacts/operations";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from "@mui/material/Tooltip";

export const CardContact = ({ id, name, number }) => {
    const dispatch = useDispatch();
        
    const delContact = () => {
       dispatch(deleteContact(id));
    };

    return (
        <Container>
            <ContactName>{name}: {number}</ContactName>
            <Tooltip >
                <ButtonMUI type="button" onClick={delContact} variant="outlined" color="secondary" sx={{font: 'inherit'}} startIcon={<DeleteIcon />}>Delete</ButtonMUI>
            </Tooltip>
        </Container>
    )
}

CardContact.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}