import firebase from 'firebase';
import 'firebase/firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDltG0Koo1ljd3iYAIXVkeY4hDQZtDGZYY",
    authDomain: "flowerbuds-fa327.firebaseapp.com",
    projectId: "flowerbuds-fa327",
    storageBucket: "flowerbuds-fa327.appspot.com",
    messagingSenderId: "524458777622",
    appId: "1:524458777622:web:9190a916ad84ff25f3e937",
    measurementId: "G-9L4NZ68XHL"
});


const db = firebase.firestore();


export default {
  firebase, db
}