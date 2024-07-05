document.addEventListener("DOMContentLoaded", function () {
    const title = document.title; // Get the title of the HTML page
    const webAppUrl = 'hhttps://script.google.com/macros/s/AKfycbwIBCTe-Nu8U9V2gt7Dl1e-7H2dz_7WoyLDPLWUWlX8iDGQ_WwqDJRMe0WcQlxKOLIV/exec'; // Replace with your web app URL

    fetch(webAppUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log data for debugging

            // Ensure the title exists in the data
            if (!data.hasOwnProperty(title)) {
                throw new Error(`Data for title '${title}' not found`);
            }

            const pageData = data[title];

            if (pageData) {
                // Set background image
                const backgroundDiv = document.getElementById('p0');
                backgroundDiv.style.backgroundImage = `url(${pageData.background})`;

                // Update the info section
                document.getElementById("name").textContent = pageData.name;
                document.getElementById("course").textContent = `Course: ${pageData.course}`;
                document.getElementById("module").textContent = `Module: ${pageData.module}`;
                document.getElementById("gb").textContent = `GB: ${pageData.gb}`;
                document.getElementById("wl").textContent = `WL: ${pageData.wl}`;

                // Update the iframes with links from JSON data
                console.log("iframe p1 URL:", pageData.p1); // Log the URL for debugging
                document.getElementById('ip1').src = pageData.p1;
                document.getElementById('ip2').src = pageData.p2;
                document.getElementById('ip3').src = pageData.p3;
                document.getElementById('ip4').src = pageData.p4;
                document.getElementById('ip5').src = pageData.p5;

                // Create and append links dynamically
                const linksDiv = document.getElementById('links');
                for (const part in pageData.parts) {
                    const link = pageData.parts[part];
                    if (link) { // Only create link if it exists
                        const a = document.createElement('a');
                        a.href = link;
                        a.textContent = `Part ${part}`;
                        linksDiv.appendChild(a);
                    }
                }

                // Extract and display a specific part (e.g., p1)
                const specificPartDiv1 = document.getElementById('ip1');
                const specificPartLink1 = pageData.parts['p1']; // Change the key as needed
                if (specificPartLink1) {
                    specificPartDiv1.src = specificPartLink1;
                }
            } else {
                console.error('Page data not found for title:', title);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
