import { Navbar, Header, About, Hinnat } from "./components";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAQlHgRiG5R2ieDnZH_YdBzTYTwGl_Lvw",
  authDomain: "personaltrainer-uuno.firebaseapp.com",
  projectId: "personaltrainer-uuno",
  storageBucket: "personaltrainer-uuno.appspot.com",
  messagingSenderId: "207193225013",
  appId: "1:207193225013:web:7d5312ad59b5743d053e7c",
  measurementId: "G-5P9EHZL4W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Hinnat />
    </div>

  );
}

export default App;
