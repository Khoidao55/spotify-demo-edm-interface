import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxKcz5BdgosyayPf7zK46XLV_dMeW0l_c",
  authDomain: "fir-spotify-a10bb.firebaseapp.com",
  databaseURL: "https://fir-spotify-a10bb.firebaseio.com",
  projectId: "fir-spotify-a10bb",
  storageBucket: "fir-spotify-a10bb.appspot.com",
  messagingSenderId: "620960354034",
  appId: "1:620960354034:web:ca6fe036e1369d41a1ca6b",
  measurementId: "G-JZ6EZF9H9E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
