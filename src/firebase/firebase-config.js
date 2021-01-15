import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs7ppJa0AveYvBvHDe2fyVHLz1cNrRQm0",
    authDomain: "react-journal-app-66ff7.firebaseapp.com",
    projectId: "react-journal-app-66ff7",
    storageBucket: "react-journal-app-66ff7.appspot.com",
    messagingSenderId: "568939169012",
    appId: "1:568939169012:web:a6cbf1a9d26d3c77114aa1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  /* DB's reference */
  const db = firebase.firestore();

/* Providers */

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/* Exports */
export {
    db,
    googleAuthProvider,
    firebase
}