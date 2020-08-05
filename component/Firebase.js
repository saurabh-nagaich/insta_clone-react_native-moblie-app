import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCAKplLydeNYSIcNiVJeavbZCEzJuTq0LE",
  authDomain: "app-native-main.firebaseapp.com",
  databaseURL: "https://app-native-main.firebaseio.com",
  projectId: "app-native-main",
  storageBucket: "app-native-main.appspot.com",
  messagingSenderId: "948251906426",
  appId: "1:948251906426:web:fec97b29c9ce4c170506c3",
  measurementId: "G-1NTY210HMH",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
