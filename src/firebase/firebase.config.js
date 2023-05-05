// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "the-recipe-room-client.firebaseapp.com",
  projectId: "the-recipe-room-client",
  storageBucket: "the-recipe-room-client.appspot.com",
  messagingSenderId: "395909066988",
  appId: "1:395909066988:web:098536949804213a22b5c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;