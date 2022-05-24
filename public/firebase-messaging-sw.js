importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyCb9i8LxNxSI9hH1haeuXGpgyzanUXzCuw",
  authDomain: "mock3-6a61e.firebaseapp.com",
  projectId: "mock3-6a61e",
  storageBucket: "mock3-6a61e.appspot.com",
  messagingSenderId: "173961836994",
  appId: "1:173961836994:web:8723dec60e5ec1bbfd3e5b",
  measurementId: "G-EV7GJJ76Y7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();