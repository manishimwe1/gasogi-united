// Import the functions you need from the SDKs you need
import {
	getApp,
	getApps,
	initializeApp,
} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBeyYRJQ8t_eBrgT6yNkRRcY2SlcV7coZ0",
	authDomain: "dropbox-nextjs.firebaseapp.com",
	projectId: "dropbox-nextjs",
	storageBucket: "dropbox-nextjs.appspot.com",
	messagingSenderId: "703484219015",
	appId: "1:703484219015:web:e94b3e3acbebbfb1e8b222",
};

// Initialize Firebase
const app = getApps().length
	? getApp()
	: initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
