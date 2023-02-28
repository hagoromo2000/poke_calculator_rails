import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import useFirebaseAuth from "../hooks/useFirebaseAuth";
import axios from "axios";

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
  const { loginWithGoogle } = useFirebaseAuth();

  const handleGoogleLogin = () => {
    const verifyIdToken = async () => {
      const user = await loginWithGoogle();
      const token = await user?.getIdToken();

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      try {
        axios.post("/auth", null, config);
      } catch (err) {
        let message;
        if (axios.isAxiosError(err) && err.response) {
          console.error(err.response.data.message);
        } else {
          message = String(err);
          console.error(message);
        }
      }
    };
    verifyIdToken();
  };

  return (
    <label
      htmlFor="signup-modal"
      onClick={handleGoogleLogin}
      className="bg-white text-gray-600 px-4 py-2 rounded-md flex items-center cursor-pointer"
    >
      <FcGoogle className="h-5 w-5 mr-2" />
      Sign in with Google
    </label>
  );
}
