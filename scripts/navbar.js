function loadNavbar() {
            fetch('https://chyzhique.github.io/site/navbar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar').innerHTML = data;
                });
        }

        window.onload = loadNavbar;
