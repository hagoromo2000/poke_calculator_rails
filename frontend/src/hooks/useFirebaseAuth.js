import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// firebase/authからUserをインポートしようとすると、import対象の中にUserは存在しないというエラーが出る。

import { auth } from "../firebase";

export default function useFirebaseAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result) {
      // ログインしたユーザー情報を取得する
      const user = result.user;

      // ユーザーから取得できる情報
      // displayName: string | null; // ユーザー表示名
      // email: string | null; // ユーザーメール
      // phoneNumber: string | null; // ユーザー電話番号
      // photoURL: string | null; // Googleプロフィール写真URL
      // uid: string; // Firebaseが生成するユニークID
      return user;
    }
  };

  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
  };

  const logout = () => signOut(auth).then(clear);

  // ユーザーのサインイン状態が変化した時に起動されるコールバック
  const nextOrObserver = async (user) => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setCurrentUser(user);
    setLoading(false);
  };

  // Firebase stateの変化を感知する (疑問:ここの処理について)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  return {
    currentUser,
    loading,
    loginWithGoogle,
    logout,
  };
}
