import { Helmet } from "react-helmet-async";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
