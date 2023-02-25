import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleAuthButton = () => {
  return (
    <>
      <div className="flex justify-center">
        <SignInButton />
      </div>
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
    <label
      htmlFor="signup-modal"
      onClick={signInWithGoogle}
      className="bg-white text-gray-600 px-4 py-2 rounded-md flex items-center cursor-pointer"
    >
      <FcGoogle className="h-5 w-5 mr-2" />
      Login with Google
    </label>
  );
}
