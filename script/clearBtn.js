    document.getElementById("clearBtn").addEventListener("click", function () {
        // Get all input elements within the form
        const inputs = document.querySelectorAll('input');

        // Loop through each input and reset its value
        inputs.forEach(input => {
            input.value = '';
        });
    });
