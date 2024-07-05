document.addEventListener("DOMContentLoaded", function () {
    const title = document.title; // Get the title of the HTML page
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbyalLPkDyWvHDCqwNllsYmp2TW-IDTZxW4mN7t-5yNWo2AW2GhQgnPEyHdlmwGwVuYw/exec'; // Replace with your web app URL

    fetch(webAppUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log data for debugging
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

                document.getElementById('ip1').src = data.p1;
                document.getElementById('ip2').src = data.p2;
                document.getElementById('ip3').src = data.p3;
                document.getElementById('ip4').src = data.p4;
                document.getElementById('ip5').src = data.p5;

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
                const specificPartDiv = document.getElementById('specific-part');
                const specificPartLink = pageData.parts['p1']; // Change the key as needed
                if (specificPartLink) {
                    specificPartDiv.innerHTML = `<h3>Specific Part</h3><a href="${specificPartLink}" target="_blank">${specificPartLink}</a>`;
                }
            } else {
                console.error('Page data not found for title:', title);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
