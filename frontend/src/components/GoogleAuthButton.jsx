import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleAuthButton = () => {
  return (
    <>
      <SignInButton />
    </>
  );
};

export default GoogleAuthButton;

//　Googleボタンでサインアップ
function SignInButton() {
  const signInWithGoogle = () => {
    // firebaseを使ってGoogleでサインアップ
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle} className="btn">
      <p>Googleでサインイン</p>
    </button>
  );
}
