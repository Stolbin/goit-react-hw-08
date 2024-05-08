import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { getRandomColor } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const { name, number } = contact;
  const dispatch = useDispatch();

  const firstLetter = name.charAt(0).toUpperCase();
  return (
    <li className={css.contactItem}>
      <div
        className={css.contactLetter}
        style={{ backgroundColor: getRandomColor() }}
      >
        {firstLetter}
      </div>
      <h4 className={css.contactTitle}>{name}</h4>
      <p className={css.contactText}>
        <span className={css.spanontactText}>☎️</span>
        {number}
      </p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
