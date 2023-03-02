import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDziD2yzm89EgZBj_L0iPCx4clug_E1clk",
  authDomain: "chatgpt-messenger-lotek.firebaseapp.com",
  projectId: "chatgpt-messenger-lotek",
  storageBucket: "chatgpt-messenger-lotek.appspot.com",
  messagingSenderId: "749702572560",
  appId: "1:749702572560:web:ed01b7d3aa5b18b879f895",
  measurementId: "G-S40PHPG7Y4"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }