// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVvtdRdmzvbrGR3y4ee0eEJQMMr37THvQ",
  authDomain: "todo-list-1233a.firebaseapp.com",
  projectId: "todo-list-1233a",
  storageBucket: "todo-list-1233a.appspot.com",
  messagingSenderId: "153180493287",
  appId: "1:153180493287:web:ab3e329a22fbfd10739942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;