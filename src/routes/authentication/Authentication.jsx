import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignIn from "../../components/sign-in-form/SignIn";

import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
