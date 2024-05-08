import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import {
  maxLengthDataEmailValidation,
  minLengthDataEmailValidation,
  minPasswordDataValidation,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const loginUserFormSchema = Yup.object().shape({
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
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={FormRegistrationInitialValues}
        validationSchema={loginUserFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2 className={css.titleForm}>Log in to your account</h2>
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
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
