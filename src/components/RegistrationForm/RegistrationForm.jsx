import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" autoComplete="new-password" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" autoComplete="new-password" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" autoComplete="new-password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;
