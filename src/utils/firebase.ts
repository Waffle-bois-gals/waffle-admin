// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFtBf88ab7sM--fXUuJzJyyCPQXBdWEPk",
  authDomain: "dev-waffle.firebaseapp.com",
  projectId: "dev-waffle",
  storageBucket: "dev-waffle.appspot.com",
  messagingSenderId: "719819977900",
  appId: "1:719819977900:web:30f265d0c70f42b3e41b09",
  measurementId: "G-CCP9R8DVPZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics.app.automaticDataCollectionEnabled = true;