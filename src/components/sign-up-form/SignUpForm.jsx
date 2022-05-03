import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import "./SignUpForm.scss";

const defaultFormFields = {
  dispalyName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFilelds, setFormFilelds] = useState(defaultFormFields);
  const { dispalyName, email, password, confirmPassword } = formFilelds;

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

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { dispalyName });
      resetFormFields();
    } catch (error) {
      if (error?.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("user credation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-continer">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          required
          name="dispalyName"
          value={dispalyName}
        />

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
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
