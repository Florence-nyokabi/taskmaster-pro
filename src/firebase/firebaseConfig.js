import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDZTVAHKjdgWSUFPHSZlP2EfDOihk2t3-M",
  authDomain: "taskmasterpro-80e57.firebaseapp.com",
  projectId: "taskmasterpro-80e57",
  storageBucket: "taskmasterpro-80e57.firebasestorage.app",
  messagingSenderId: "1058088035160",
  appId: "1:1058088035160:web:64ad3a201b9d91d8c77b2d",
  measurementId: "G-KPN5ENY42Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);