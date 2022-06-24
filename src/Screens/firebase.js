import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyDAH7_ALkhMm0_nSCPueXcQoSQEbVZmp3c",
    authDomain: "authentication-cf1e0.firebaseapp.com",
    projectId: "authentication-cf1e0",
    storageBucket: "authentication-cf1e0.appspot.com",
    messagingSenderId: "551475844452",
    appId: "1:551475844452:web:a70e7e4a1a2757309e5671"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)