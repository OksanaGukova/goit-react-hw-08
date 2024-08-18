import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { RootState } from "../App/App.types";

const ContactList: React.FC = () => {
 const filteredContacts = useSelector((state: RootState) => selectFilteredContacts(state));

  return (
    <div>
      {filteredContacts.length === 0 ? (
        <p className={css.text}>No contacts found</p>
      ) : (
        <ul className={css.container}>
          {filteredContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
