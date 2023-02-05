// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/analytics';

// auth dùng để xác thực
import 'firebase/auth';
// realtime database
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDMRnMPKYxoQXUpKynWcPflsnPRQRCTNV0',
    authDomain: 'chat-room-26b3d.firebaseapp.com',
    projectId: 'chat-room-26b3d',
    storageBucket: 'chat-room-26b3d.appspot.com',
    messagingSenderId: '831638914249',
    appId: '1:831638914249:web:036119c4afde1997613918',
    measurementId: 'G-2WF4BST5HY',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth(); // https://firebase.google.com/docs/auth/web/facebook-login#web-version-8_4
const db = firebase.firestore(); // https://firebase.google.com/docs/firestore/quickstart#web-version-8

export { db, auth };
export default firebase;
