import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUZib-ZEtIMknTD2ZPkpopicO6zmv2jKc",
  authDomain: "tenedores-6c963.firebaseapp.com",
  databaseURL: "https://tenedores-6c963.firebaseio.com",
  projectId: "tenedores-6c963",
  storageBucket: "tenedores-6c963.appspot.com",
  messagingSenderId: "409994453502",
  appId: "1:409994453502:web:9a7b39eb860dfa8955e0af",
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
