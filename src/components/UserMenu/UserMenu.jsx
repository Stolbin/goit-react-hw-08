import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.userName}> {userData.name}</p>
      <button className={css.btnLogout} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
