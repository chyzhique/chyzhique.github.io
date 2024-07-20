    // Import Firebase modules
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
    import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyA9fv5y23398kzP8HljS3BlreOjycA-NUI",
  authDomain: "anglomova-429e2.firebaseapp.com",
  databaseURL: "https://anglomova-429e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anglomova-429e2",
  storageBucket: "anglomova-429e2.appspot.com",
  messagingSenderId: "30552534006",
  appId: "1:30552534006:web:74d0515d25b5778e30f5d7",
  measurementId: "G-9W633V0TWL"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
  
// Show success message
function showSuccessMessage(message, redirectUrl) {
  const successMessage = document.getElementById('success-message');
  successMessage.textContent = message;
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
    window.location.href = redirectUrl;
  }, 3000);
}
  
    // Register new user
    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          displayName: user.displayName || '',
          photoURL: user.photoURL || ''
        });

        showSuccessMessage('User registered successfully', 'profile.html');
      } catch (error) {
        console.error("Error writing document: ", error);
        alert(error.message);
      }
    });

    // Login user
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        showSuccessMessage('Login successful', 'profile.html');
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    });

// Google Sign-In for Registration
document.getElementById('google-register-button').addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if the user already exists in Firestore
    const userQuery = query(collection(db, 'users'), where('uid', '==', user.uid));
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      // Add new user to Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email
      });
    }

    showSuccessMessage('Google Sign-Up successful', 'profile.html');
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});

// Google Sign-In for Login
document.getElementById('google-login-button').addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    showSuccessMessage('Google Sign-In successful', 'profile.html');
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
// Avatar if logged in
const authButton = document.getElementById('auth-button');

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, show avatar
                const avatarUrl = user.photoURL || 'site/images/default-avatar.jpg'; // Use a default avatar if photoURL is not available
                authButton.innerHTML = `<img src="${avatarUrl}" alt="Avatar" class="avatar">`;
            } else {
                // No user is signed in, show sign-in button
                authButton.innerHTML = 
    '<div class="nav-auth" id="auth-button">
    <button class="nav-auth-sign" onclick="document.location='/login.html'">Sign in</button>
    <button class="nav-auth-reg" onclick="document.location='/login.html'">Register</button>
  </div>';
            }
        });
