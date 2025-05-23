import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "habitats.firebaseapp.com",
  projectId: "habitats-12345",
  storageBucket: "habitats.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456ghi789"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
