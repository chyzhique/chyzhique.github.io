// Import Firebase Database SDK
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase configuration (assuming already imported and initialized in authentication script)

// Initialize Firebase Realtime Database
const database = getDatabase(app);
const pageRef = ref(database, 'currentPage');

// Function to navigate to a page
export function navigateTo(pageId, url = null) {
    if (url) {
        showExternalContent(pageId, url);
    } else {
        showPage(pageId);
    }
    // Update the current page in the database
    set(pageRef, { pageId, url });
}

// Function to show a page
export function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.classList.add('active');
    } else {
        console.error(`Page with id ${pageId} not found.`);
    }
}

// Function to load external content
export function showExternalContent(pageId, url) {
    const container = document.getElementById('external-container');
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            container.innerHTML = doc.body.innerHTML;
            showPage('external-content');
        })
        .catch(error => {
            console.error('Error loading external content:', error);
        });
}

// Listen for changes in the database and update the page accordingly
export function onPageChange(callback) {
    onValue(pageRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.url) {
                showExternalContent(data.pageId, data.url);
            } else {
                showPage(data.pageId);
            }
        }
        callback(data); // Optional: Pass data to callback function
    });
}
