import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyCrKMvV5lrJp_g-Qa5w1L98Xv_37-EhXD0",
  authDomain: "online-journal-18782.firebaseapp.com",
  databaseURL: "https://online-journal-18782.firebaseio.com",
  projectId: "online-journal-18782",
  storageBucket: "online-journal-18782.appspot.com",
  messagingSenderId: "347187722885",
  appId: "1:347187722885:web:ca25aa65e6eacf4ca247ec",
  measurementId: "G-F0LS1YLJHH"
});
const db = firebaseApp.firestore();

export { db };