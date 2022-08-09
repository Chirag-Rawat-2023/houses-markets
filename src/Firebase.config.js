
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0wjjtFoabEjsZw2d7YWN7QM6_PyV9w-8",
  authDomain: "house-marketplace-e8a79.firebaseapp.com",
  projectId: "house-marketplace-e8a79",
  storageBucket: "house-marketplace-e8a79.appspot.com",
  messagingSenderId: "963158133185",
  appId: "1:963158133185:web:fd4da158158d3645f78740",
  measurementId: "G-8GGWKJYYNN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =getFirestore()