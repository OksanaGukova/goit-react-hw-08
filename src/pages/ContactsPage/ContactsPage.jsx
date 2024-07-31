import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from "../../components/ContactList/ContactList";
import css from './ContactsPage.module.css'
import SearchBox from "../../components/SearchBox/SearchBox";


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p className={css.title}>Your contacts</p>
      <ContactForm />
      <SearchBox />
      {isLoading && <p className={css.loading}>Request in progress...</p>}
      <ContactList />
    </>
  );
}
