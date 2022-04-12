import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCvbkW5icF_khXmUL67TtG028LK7jtjMUE",
  authDomain: "movie-app-b223c.firebaseapp.com",
  projectId: "movie-app-b223c",
  storageBucket: "movie-app-b223c.appspot.com",
  messagingSenderId: "499628614724",
  appId: "1:499628614724:web:1a9227768ce064b5420811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message)
  }

};

export const signIn = async(email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");    
    console.log(userCredential);
  } catch (err) {
    alert(err.message)
  }
};

export const logOut = () => {
  signOut(auth)
  alert("logged out succesfully")
}