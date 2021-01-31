import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseAuthProvider } from "use-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";

//TODO: move init somewhere else?
const firebaseConfig = {
  apiKey: "AIzaSyCgQZlx7rI-ylyEvcOWaI2EEv5_YTzVfEI",
  authDomain: "expensereport-form.firebaseapp.com",
  projectId: "expensereport-form",
  storageBucket: "expensereport-form.appspot.com",
  messagingSenderId: "718660023827",
  appId: "1:718660023827:web:bd832235376178d913f1e6"
};
// Initialize Firebase
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase}>
    <App />
  </FirebaseAuthProvider>,
  document.getElementById("root")
);
