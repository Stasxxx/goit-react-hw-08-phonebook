import { ContactForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./Contacts.styled";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError } from "redux/contacts/selectors";


export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
         
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in  progress...</b>}
        <ContactForm />
      </Container>
        
    );
};
