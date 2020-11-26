import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGsI1Z92tdgKkEwpx_eEkRRvrAvGpdfZM",
    authDomain: "twitter-clone-c2cce.firebaseapp.com",
    databaseURL: "https://twitter-clone-c2cce.firebaseio.com",
    projectId: "twitter-clone-c2cce",
    storageBucket: "twitter-clone-c2cce.appspot.com",
    messagingSenderId: "25203783400",
    appId: "1:25203783400:web:17aa256ecfeaf46aeb7b5d",
    measurementId: "G-YPC3M4J7ZJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

// connect to firebase backend, able to pull db into app