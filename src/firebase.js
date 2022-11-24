import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAOLMYXLyVvkGgqb9y0H9-8Z8CvMsON528",
  authDomain: "todoist-tutorial-bf410.firebaseapp.com",
  databaseURL: "https://todoist-tutorial-bf410-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoist-tutorial-bf410",
  storageBucket: "todoist-tutorial-bf410.appspot.com",
  messagingSenderId: "350381853347",
  appId: "1:350381853347:web:dad4e98840a4f839d30d16"
});

export { firebaseConfig as firebase };
