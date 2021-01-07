import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyA2uPATKAEURfQ4z-ZPJCKE88LXh36jvJI",
        authDomain: "fir-auth-development-52de6.firebaseapp.com",
        projectId: "fir-auth-development-52de6",
        storageBucket: "fir-auth-development-52de6.appspot.com",
        messagingSenderId: "203885732468",
        appId: "1:203885732468:web:983206e3e9f01c508a6721"
    }
);

const auth = app.auth();
export { auth };
export default app;