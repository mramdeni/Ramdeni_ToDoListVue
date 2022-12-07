import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFcHD7kqovQwt1rJVpe07fGBeQqLbsIOQ",
  authDomain: "crud-vue-664f0.firebaseapp.com",
  projectId: "crud-vue-664f0",
  storageBucket: "crud-vue-664f0.appspot.com",
  messagingSenderId: "943619189404",
  appId: "1:943619189404:web:4d8394cc6022b09fd59b59",
  measurementId: "G-FC9DDLLM80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
