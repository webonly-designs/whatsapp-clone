import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnmA6ThbwKhLgL1SV-G8EK7SQXJcDuTFQ",
    authDomain: "whatsapp-2-a78e0.firebaseapp.com",
    projectId: "whatsapp-2-a78e0",
    storageBucket: "whatsapp-2-a78e0.appspot.com",
    messagingSenderId: "76536846530",
    appId: "1:76536846530:web:59e33519b4361d1a33035b"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };