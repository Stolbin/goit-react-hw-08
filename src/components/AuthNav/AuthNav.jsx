import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <button className={css.btnRegister} type="button">
          Register
        </button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <button className={css.btnLogIn} type="button">
          Log In
        </button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
