import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAcN7nlr32nWtvpQ42poDdtl2X6VTdiE9Y",
  authDomain: "disneyclone-fbd27.firebaseapp.com",
  projectId: "disneyclone-fbd27",
  storageBucket: "disneyclone-fbd27.appspot.com",
  messagingSenderId: "965448473050",
  appId: "1:965448473050:web:48b83593d9c9405d1ac8e3",
  measurementId: "G-C7RJKJTHCX"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { authentication, provider, storage };
export default db;