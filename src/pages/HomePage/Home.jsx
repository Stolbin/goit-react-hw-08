import { Helmet } from "react-helmet-async";
import css from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.text}>Welcome to your contacts manager! </h1>
      </div>
    </>
  );
};

export default HomePage;
