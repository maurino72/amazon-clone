import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyASDse2XQ20Sqs0ce_BIRNkgO5uyWclPJM",
  authDomain: "clone-72de5.firebaseapp.com",
  databaseURL: "https://clone-72de5.firebaseio.com",
  projectId: "clone-72de5",
  storageBucket: "clone-72de5.appspot.com",
  messagingSenderId: "605444720763",
  appId: "1:605444720763:web:62752a9da51cc384b23ade"
};

// Initializing the Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);

// Initialize DB
const db = firebaseApp.firestore();

// Authentication
const auth = Firebase.auth();

export {
  db,
  auth
};