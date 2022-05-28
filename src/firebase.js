import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCCXgnQpEtiKjqh0y5MwE1G_Oqqqdks7eE',
  authDomain: 'chess-development-382e5.firebaseapp.com',
  projectId: 'chess-development-382e5',
  storageBucket: 'chess-development-382e5.appspot.com',
  messagingSenderId: '455763357352',
  appId: '455763357352:web:2d9f5d568fbc7e8ac01c9d',
});

export const auth = app.auth();
export const firestore = getFirestore(); 

export default app;
