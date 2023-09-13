import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnDvMFa8rWy753UJp0n0D4kP3z00TgqJg",
  authDomain: "livechatapp-b2e0c.firebaseapp.com",
  projectId: "livechatapp-b2e0c",
  storageBucket: "livechatapp-b2e0c.appspot.com",
  messagingSenderId: "682136513287",
  appId: "1:682136513287:web:1c7b3b8011c3878a5873a2"
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
