import { ContactForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { Container, ContactList } from "./Contacts.styled";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError, selectContacts } from "redux/contacts/selectors";


export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
    return (
      <Container>
        <SectionTitle title="Phonebook"/>
        <Form />
        {contacts.length === 0 ? <p>Ther is no contacts</p> :
          <ContactList>
            <SectionTitle title="Contacts"/>
            <Filter />
            {isLoading && !error && <b>Request in  progress...</b>}
            <ContactForm />
          </ContactList>
        }
      </Container>
        
    );
};
