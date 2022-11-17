import { Container, Button } from "./CardContact.styled";
import { deleteContact } from "redux/contacts/operations";
import { useDispatch } from "react-redux";


export const CardContact = ({ id, name, number }) => {
    const dispatch = useDispatch();
        
    const delContact = () => {
       dispatch(deleteContact(id));
    };

    return (
        <Container>
            <div>{name}: {number}</div>
            <Button type="button" onClick={delContact}>Delete</Button>
        </Container>
    )
}