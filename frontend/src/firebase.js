import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDTs8v2iHw9udRQZ0PPyS2TfnQ41uG598",
  authDomain: "poke-calculator-acbba.firebaseapp.com",
  projectId: "poke-calculator-acbba",
  storageBucket: "poke-calculator-acbba.appspot.com",
  messagingSenderId: "370290780058",
  appId: "1:370290780058:web:c3ca8eecbbc55c3a6d3c23",
  measurementId: "G-PMBFL5CLHS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };
