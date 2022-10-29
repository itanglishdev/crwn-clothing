// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, signInWithReidrect, signInWithPopUp, GoogleAuthProvider} from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCG_05gv2D2bMf-Q5DyAekj0SNjurG3Z5U",
  authDomain: "crwn-clothing-db-6dfd7.firebaseapp.com",
  projectId: "crwn-clothing-db-6dfd7",
  storageBucket: "crwn-clothing-db-6dfd7.appspot.com",
  messagingSenderId: "103998116383",
  appId: "1:103998116383:web:46e7269ba40f7f6ca93b2a"
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopUp(auth, provider)


