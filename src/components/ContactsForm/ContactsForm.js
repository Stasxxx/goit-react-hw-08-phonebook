// import PropTypes from "prop-types";
import { Item, List } from "./ContactsForm.styled"
import { CardContact } from "components/CardContact/CardContact";
import { useSelector,useDispatch} from "react-redux";
import { selectVisibleFilter } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";


export const ContactForm = () => {
    
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleFilter);
    console.log(visibleContacts)
    const delContact = contactId => {
        dispatch(deleteContact(contactId))
    };

    return (
        <List>
            {visibleContacts.map(({id, name, number}) =>
                <Item key={id}><CardContact id={id} name={name} number={number} delContact={delContact} /></Item>)
            }
        </List>
    )
};

