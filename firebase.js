// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsAxsJm3wWap7XgWbGz27OddZCEIn0Vb0",
    authDomain: "reactnativefp1.firebaseapp.com",
    projectId: "reactnativefp1",
    storageBucket: "reactnativefp1.appspot.com",
    messagingSenderId: "511811668200",
    appId: "1:511811668200:web:c1674be3973e8db318615d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();

export { auth }; 