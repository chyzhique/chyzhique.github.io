// Import Firebase Authentication SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    // Add other Firebase config keys as needed
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to sign in anonymously
export function signInAnonymously() {
    return signInAnonymously(auth);
}

// Function to listen for authentication state changes
export function onAuthStateChange(callback) {
    onAuthStateChanged(auth, callback);
}
