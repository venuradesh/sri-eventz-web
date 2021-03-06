import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfGsM6vbWqMa60Ci-ghHGzuqC9C18AfxI",
  authDomain: "sri-eventz.firebaseapp.com",
  projectId: "sri-eventz",
  storageBucket: "sri-eventz.appspot.com",
  messagingSenderId: "173685463402",
  appId: "1:173685463402:web:3a1e4f908b057736fd6d13",
  measurementId: "G-MEMHE2V369",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
db.settings({ timestampsInSnapshots: true });
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { auth, googleProvider };
export default db;
