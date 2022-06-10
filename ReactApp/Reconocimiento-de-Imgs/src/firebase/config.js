import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCykMDZY1xwgVGyBXkoMhewJ4oOfNHExIw",
  authDomain: "reconocimiento-de-imagen-644f0.firebaseapp.com",
  databaseURL:
    "https://reconocimiento-de-imagen-644f0-default-rtdb.firebaseio.com",
  projectId: "reconocimiento-de-imagen-644f0",
  storageBucket: "reconocimiento-de-imagen-644f0.appspot.com",
  messagingSenderId: "173420161811",
  appId: "1:173420161811:web:b48513a88c26736a09c8e6",
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
