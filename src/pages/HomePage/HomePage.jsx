import { Helmet } from "react-helmet-async";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1 className={css.text}>It is your personal phone book</h1>
      </div>
    </>
  );
};

export default HomePage;
