import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAN6gPvnUtgrRM0vuTjeEBsvss7-ScdMqs",
  authDomain: "project-71-91af2.firebaseapp.com",
  projectId: "project-71-91af2",
  storageBucket: "project-71-91af2.appspot.com",
  messagingSenderId: "516538250653",
  appId: "1:516538250653:web:8c925a6ae64d54722a6b74"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

