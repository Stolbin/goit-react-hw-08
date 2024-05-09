import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  minLengthDataNameValidation,
  maxLengthDataNameValidation,
  minLengthDataNumberValidation,
  maxLengthDataNumberValidation,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import "react-toastify/ReactToastify.css";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(minLengthDataNameValidation, "Too Short!")
    .max(maxLengthDataNameValidation, "Too Long!"),
  number: Yup.string()
    .required("Required")
    .min(minLengthDataNumberValidation, "Too Short!")
    .max(maxLengthDataNumberValidation, "Too Long!"),
});

const FormInitialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    const action = addContact(newContact);
    dispatch(action);
    actions.resetForm();
    navigate("/contacts");
  };

  return (
    <Formik
      initialValues={FormInitialValues}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
      className={css.form}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.formLabel}>
          <span className={css.formSpan}>Name</span>
          <Field
            className={css.formFiled}
            id={nameFieldId}
            type="text"
            name="name"
            placeholder="Name..."
            required
          />
          <ErrorMessage
            className={css.formError}
            component="span"
            name="name"
          />
        </label>
        <label htmlFor={numberFieldId} className={css.formLabel}>
          <span className={css.formSpan}>Number</span>
          <Field
            className={css.formFiled}
            id={numberFieldId}
            type="text"
            name="number"
            placeholder="Number..."
            required
          />
          <ErrorMessage
            className={css.formError}
            component="span"
            name="number"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
