import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAX5d4sBWJiva0J7OPKThhd_5Vh-E0YYhU',
  authDomain: 'desafio-atom.firebaseapp.com',
  projectId: 'desafio-atom',
  storageBucket: 'desafio-atom.appspot.com',
  messagingSenderId: '84381624314',
  appId: '1:84381624314:web:33f1ee386d71c1314d6643',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

const usersRef = collection(firestore, 'users');
const noticesRef = collection(firestore, 'notices');

export { signInWithEmailAndPassword, firestore, auth, usersRef, noticesRef };
