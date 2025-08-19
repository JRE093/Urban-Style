  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  //import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"

   // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyBW2w1DJUUjsgMmr4qkwa-tpNd3NvRjtck",
    authDomain: "nuevvvo.firebaseapp.com",
    projectId: "nuevvvo",
    storageBucket: "nuevvvo.appspot.com",
    messagingSenderId: "98632473836",
    appId: "1:98632473836:web:b19abb2f84dd0f7a9059c9"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);