import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  maxLengthDataEmailValidation,
  maxLengthDataNameValidation,
  minLengthDataEmailValidation,
  minLengthDataNameValidation,
  minPasswordDataValidation,
} from "../utils/constants";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const registerUserFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(
      minLengthDataNameValidation,
      `Sorry, but your name must be at least ${minLengthDataNameValidation} character long`
    )
    .max(
      maxLengthDataNameValidation,
      `Sorry, but your name should be no longer than ${maxLengthDataNameValidation} character!`
    ),
  email: Yup.string()
    .required("Email is required")
    .min(
      minLengthDataEmailValidation,
      `Your email address must be at least ${minLengthDataEmailValidation} character long`
    )
    .max(
      maxLengthDataEmailValidation,
      `Your email address should be no longer than ${maxLengthDataEmailValidation} symbols!`
    ),
  password: Yup.string()
    .required("Password is required")
    .min(
      minPasswordDataValidation,
      `It is important that your password is at least ${minPasswordDataValidation} characters long!`
    ),
});

const FormRegistrationInitialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div className={css.formBox}>
      <Formik
        initialValues={FormRegistrationInitialValues}
        validationSchema={registerUserFormSchema}
        onSubmit={handleSubmit}
        className={css.formContainer}
      >
        <Form className={css.form}>
          <h2 className={css.titleForm}>Register user</h2>
          <label className={css.formLabel}>
            <span className={css.formSpan}>Name</span>
            <Field
              className={css.formFiled}
              type="text"
              name="name"
              placeholder="Name..."
              autoComplete="new-name"
            />
            <ErrorMessage
              className={css.formError}
              component="span"
              name="name"
            />
          </label>
          <label className={css.formLabel}>
            <span className={css.formSpan}>Email</span>
            <Field
              className={css.formFiled}
              type="email"
              name="email"
              placeholder="email@mail.com"
              autoComplete="new-email"
            />
            <ErrorMessage
              className={css.formError}
              component="span"
              name="email"
            />
          </label>
          <label className={css.formLabel}>
            <span className={css.formSpan}>Password</span>
            <Field
              className={css.formFiled}
              type="password"
              name="password"
              placeholder="Password..."
              autoComplete="new-password"
            />
            <ErrorMessage
              className={css.formError}
              component="span"
              name="password"
            />
          </label>
          <button className={css.formBtn} type="submit">
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
