import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOVSkgY17qOtVrlUFBv0TfNj4tjlr7Fik",
  authDomain: "e-commerce-86f7b.firebaseapp.com",
  projectId: "e-commerce-86f7b",
  storageBucket: "e-commerce-86f7b.appspot.com",
  messagingSenderId: "332908432301",
  appId: "1:332908432301:web:256f93f5b8b8ec8b6cef24",
};

const firebaceApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth?.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error?.message);
    }
  }
  return userDocRef;
};
