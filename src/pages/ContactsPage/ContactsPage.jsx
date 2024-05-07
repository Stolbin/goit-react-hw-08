import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { apiFetchContacts } from "../../redux/contacts/operations";
import { selectContactsIsLoading } from "../../redux/contacts/selectors";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(apiFetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Helmet>
        <title>Contacts Page</title>
      </Helmet>
      <NavLink to="/addNewContact">
        <button className={css.btnLink} type="button">
          Add new contact
        </button>
      </NavLink>
      <Outlet />
      <SearchBox />
      <div> {isLoading && "Request in progress..."} </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
