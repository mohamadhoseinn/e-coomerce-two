import { signInWithGooglePopup } from "../../utils/firebase/Firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
