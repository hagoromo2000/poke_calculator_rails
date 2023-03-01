import { Link } from "react-router-dom";
import React from "react";
import GoogleAuthButton from "./GoogleAuthButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="navbar bg-primary sticky">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-xl text-white">
            <Link to={`/`}>ダメージ計算</Link>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li tabIndex={0}>
              <a>
                育成論
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-primary">
                <li>
                  <Link to={`/posts`}>育成論一覧</Link>
                </li>
                <li>
                  <Link to={`/posts/new/`}>育成論投稿</Link>
                </li>
              </ul>
            </li>
            <li>
              {user ? (
                <>
                  <UserInfo />
                </>
              ) : (
                <label htmlFor="signup-modal">ログイン</label>
              )}
            </li>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="signup-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="signup-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <GoogleAuthButton />
        </div>
      </div>
    </>
  );
};

export default Header;

function UserInfo() {
  return (
    <>
      <a>
        <div className="avator">
          <div className="w-10 rounded-full">
            <img src={auth.currentUser.photoURL} alt="" />
          </div>
        </div>
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <ul className="pr-2 bg-primary">
        <li>
          <SignOutButton />
        </li>
      </ul>
    </>
  );
}

const logoutHandler = async () => {
  // await logout();
  auth.signOut();
  toast.success("サインアウトしました！");
};

function SignOutButton() {
  return <button onClick={logoutHandler}>サインアウト</button>;
}
