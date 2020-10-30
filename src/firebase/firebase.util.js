import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-analytics'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAyoMf-Z10dpBE1n92HF1Q5uiur9WoHTcc",
  authDomain: "crwn-db-ff7da.firebaseapp.com",
  databaseURL: "https://crwn-db-ff7da.firebaseio.com",
  projectId: "crwn-db-ff7da",
  storageBucket: "crwn-db-ff7da.appspot.com",
  messagingSenderId: "151163916420",
  appId: "1:151163916420:web:c5d2bf06e288697e87f2d1",
  measurementId: "G-502E0N6HRG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const SignInWithGoogle = () => (auth.signInWithPopup(provider))


export default firebase;