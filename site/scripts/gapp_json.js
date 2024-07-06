document.addEventListener("DOMContentLoaded", function () {
    const title = document.title; // Get the title of the HTML page
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbwIBCTe-Nu8U9V2gt7Dl1e-7H2dz_7WoyLDPLWUWlX8iDGQ_WwqDJRMe0WcQlxKOLIV/exec';

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
                if (pageData && pageData.background) {
            backgroundDiv.style.backgroundImage = `url(${pageData.background})`;
        }

                // Update the info section
                if (pageData.name) document.getElementById("name").textContent = pageData.name;
                if (pageData.course) document.getElementById("course").textContent = `Course: ${pageData.course}`;
                if (pageData.module) document.getElementById("module").textContent = `Module: ${pageData.module}`;
                if (pageData.gb) document.getElementById("gb").textContent = `GB: ${pageData.gb}`;
                if (pageData.wl) document.getElementById("wl").textContent = `WL: ${pageData.wl}`;

                // Update the iframes with links from JSON data
                if (pageData.p1) document.getElementById('ip1').src = pageData.p1;
                if (pageData.p2) document.getElementById('ip2').src = pageData.p2;
                if (pageData.p3) document.getElementById('ip3').src = pageData.p3;
                if (pageData.p4) document.getElementById('ip4').src = pageData.p4;
                if (pageData.p5) document.getElementById('ip5').src = pageData.p5;

                // Create and append links dynamically
                const linksDiv = document.getElementById('links');
                if (pageData.parts) {
                    for (const part in pageData.parts) {
                        const link = pageData.parts[part];
                        if (link) { // Only create link if it exists
                            const a = document.createElement('a');
                            a.href = link;
                            a.textContent = `Part ${part}`;
                            linksDiv.appendChild(a);
                        }
                    }
                }
            } else {
                console.error('Page data not found for title:', title);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
