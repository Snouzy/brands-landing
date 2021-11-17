import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import CONFIG from "./config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: CONFIG.apiKey,
  authDomain: CONFIG.authDomain,
  projectId: CONFIG.projectId,
  storageBucket: CONFIG.storageBucket,
  messagingSenderId: CONFIG.messagingSenderId,
  appId: CONFIG.appId,
  measurementId: CONFIG.measurementId,
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db };
