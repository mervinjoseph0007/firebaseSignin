import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPo9i5e5WyZDP6KRoJzahveyi_nuztQZM",
  authDomain: "crud-firebase-8c56d.firebaseapp.com",
  projectId: "crud-firebase-8c56d",
  storageBucket: "crud-firebase-8c56d.appspot.com",
  messagingSenderId: "118214911798",
  appId: "1:118214911798:web:65b49badcb04ef70a27597"
};

const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
// var provider = new auth.GoogleAuthProvider(); 
export {auth};