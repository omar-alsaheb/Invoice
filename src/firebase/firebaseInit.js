// import * as firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDJtTeg3GRY4IKF5ZstYZOt3YUn08En-ik",
//   authDomain: "invoice-app-eb754.firebaseapp.com",
//   projectId: "invoice-app-eb754",
//   storageBucket: "invoice-app-eb754.appspot.com",
//   messagingSenderId: "773968038540",
//   appId: "1:773968038540:web:40245b9ed90cc28b42c9a9"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp.firestore();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import '@firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJtTeg3GRY4IKF5ZstYZOt3YUn08En-ik",
  authDomain: "invoice-app-eb754.firebaseapp.com",
  projectId: "invoice-app-eb754",
  storageBucket: "invoice-app-eb754.appspot.com",
  messagingSenderId: "773968038540",
  appId: "1:773968038540:web:40245b9ed90cc28b42c9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export default app