import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAooFpuNPnGrskMF0yv-1ViXB9PuD3_JDc",
    authDomain: "portfolio-52b3b.firebaseapp.com",
    projectId: "portfolio-52b3b",
    storageBucket: "portfolio-52b3b.appspot.com",
    messagingSenderId: "159784703586",
    appId: "1:159784703586:web:fb505b791e102add8aa33b",
    measurementId: "G-SBTRPQPT61"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database().ref("users");

export default database;