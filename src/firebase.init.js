// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXA7JQ59kgZGrXnbLz4CGGo1F0bTCjKIY",
  authDomain: "turisome-hotle.firebaseapp.com",
  projectId: "turisome-hotle",
  storageBucket: "turisome-hotle.appspot.com",
  messagingSenderId: "773739957282",
  appId: "1:773739957282:web:a5bed70104d69267650e7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;