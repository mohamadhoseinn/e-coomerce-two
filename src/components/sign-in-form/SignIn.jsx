import { useState } from "react";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase";

import "./SignIn.scss";

const defaultFormFields = {
  dispalyName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formFilelds, setFormFilelds] = useState(defaultFormFields);
  const { email, password } = formFilelds;

  const resetFormFields = () => {
    setFormFilelds(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormFilelds({ ...formFilelds, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error?.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email ");
          break;

        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-continer">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
