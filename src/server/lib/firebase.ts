/** @format */

import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: 'the-blog-nextjs.firebaseapp.com',
  projectId: 'the-blog-nextjs',
  storageBucket: 'the-blog-nextjs.firebasestorage.app',
  messagingSenderId: '777606183616',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

const usersRef = collection(firestore, 'users');
const noticesRef = collection(firestore, 'notices');

export { signInWithEmailAndPassword, firestore, auth, usersRef, noticesRef };
