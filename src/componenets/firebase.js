import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCzniv7A-U8WbnBwnYB5EmHZBkUpUsvycg",
  authDomain: "twitter-clone-e57aa.firebaseapp.com",
  databaseURL: "https://twitter-clone-e57aa.firebaseio.com",
  projectId: "twitter-clone-e57aa",
  storageBucket: "twitter-clone-e57aa.appspot.com",
  messagingSenderId: "112520759643",
  appId: "1:112520759643:web:06798fe70a7d5189f6327e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db