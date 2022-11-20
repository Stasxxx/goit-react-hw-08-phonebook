import { ContactForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { Container, ContactList, NoContacts } from "./Contacts.styled";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError, selectContacts } from "redux/contacts/selectors";
import { Helmet } from "react-helmet";

export default function Contacts () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
  return (
      <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      
      <Container>
        <SectionTitle title="Phonebook"/>
        <Form />
        {contacts.length === 0 ? <NoContacts>There is no contacts!</NoContacts> :
          <ContactList>
            <SectionTitle title="Contacts"/>
            <Filter />
            {isLoading && !error && <b>Request in  progress...</b>}
            <ContactForm />
          </ContactList>
        }
      </Container>
      </>  
    );
};
