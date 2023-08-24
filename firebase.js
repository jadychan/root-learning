import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBAz5HgOB_Gp_v60abDtxziwQJ1bmCXDXs",
  authDomain: "root-learning.firebaseapp.com",
  projectId: "root-learning",
  storageBucket: "root-learning.appspot.com",
  messagingSenderId: "1028457907688",
  appId: "1:1028457907688:web:2b0e5819f91cb3b78f105d",
  measurementId: "G-R7DGW5PBY5"
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase;
