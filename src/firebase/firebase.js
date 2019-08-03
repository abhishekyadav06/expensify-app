import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBU-s9YXm3Sh8McImxEeh3CfPNtf2vRxWY",
    authDomain: "expensify-app-4fbc4.firebaseapp.com",
    databaseURL: "https://expensify-app-4fbc4.firebaseio.com",
    projectId: "expensify-app-4fbc4",
    storageBucket: "",
    messagingSenderId: "336033703690",
    appId: "1:336033703690:web:0a0c158007691ec4"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    export { firebase, database as default };

