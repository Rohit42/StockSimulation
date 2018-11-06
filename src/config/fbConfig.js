import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDZ6ackH-HhVHkM4WeB3JLoX3tIALbFBIw",
  authDomain: "stocksim-7b0e3.firebaseapp.com",
  databaseURL: "https://stocksim-7b0e3.firebaseio.com",
  projectId: "stocksim-7b0e3",
  storageBucket: "",
  messagingSenderId: "97488453538",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 

