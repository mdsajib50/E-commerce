// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.
  authDomain:process.env.
  projectId
  storageBucketprocess.env.:process.env.
  messagingSenderId:process.env.
  appId:process.env.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;