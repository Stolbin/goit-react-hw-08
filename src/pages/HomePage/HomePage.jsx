import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        {isLoggedIn ? (
          <h1 className={css.text}>It is your personal phone book</h1>
        ) : (
          <h1 className={css.text}>Create your personal contact book</h1>
        )}
      </div>
    </>
  );
};

export default HomePage;
