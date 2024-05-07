import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import ErrorMessage from "../Error/Error";
import { selectNameFilter } from "../../redux/filters/selectors";
import {
  selectContactsIsError,
  selectContactsIsLoading,
  selectTotalContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const isError = useSelector(selectContactsIsError);
  const nameFilter = useSelector(selectNameFilter);
  const totalContacts = useSelector(selectTotalContacts);

  const noContacts = filteredContacts.length === 0 && nameFilter !== "";

  const foundContactsCount = filteredContacts.length;

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {noContacts && <p className={css.textFound}>No contacts found.</p>}
      {nameFilter && foundContactsCount > 0 && (
        <p>Found {foundContactsCount} contacts.</p>
      )}
      {foundContactsCount === 0 && !nameFilter && (
        <p className={css.textNotContact}>
          You have no contacts yet. Add your first contact!
        </p>
      )}
      {!nameFilter && <p>Total contacts: {totalContacts}</p>}
      <ul className={css.contactList}>
        {filteredContacts.map(({ name, number, id }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
