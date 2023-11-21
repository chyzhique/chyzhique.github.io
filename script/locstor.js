    function saveToLocalStorage() {
        // Iterate over text inputs
        for (let i = 1; i <= 50; i++) {
            const wordInputValue = document.getElementById(`wordInput${i}`).value;
            localStorage.setItem(`wordInput${i}`, wordInputValue);
        }

        // Iterate over radio buttons
        for (let i = 1; i <= 50; i++) {
            const radioChecked = document.querySelector(`input[name="word${i}"]:checked`);
            if (radioChecked) {
                localStorage.setItem(`radio${i}Value`, radioChecked.value);
            }
        }

        // Iterate over select boxes
        for (let i = 1; i <= 50; i++) {
            const selectValue = document.getElementById(`select${i}`).value;
            localStorage.setItem(`select${i}Value`, selectValue);
        }
    }

    // Function to load input values from local storage
    function loadFromLocalStorage() {
        // Iterate over text inputs
        for (let i = 1; i <= 50; i++) {
            const wordInputValue = localStorage.getItem(`wordInput${i}`);
            document.getElementById(`wordInput${i}`).value = wordInputValue || '';
        }

        // Iterate over radio buttons
        for (let i = 1; i <= 50; i++) {
            const radioValue = localStorage.getItem(`radio${i}Value`);
            if (radioValue) {
                document.querySelector(`input[name="word${i}"][value="${radioValue}"]`).checked = true;
            }
        }

        // Iterate over select boxes
        for (let i = 1; i <= 50; i++) {
            const selectValue = localStorage.getItem(`select${i}Value`);
            document.getElementById(`select${i}`).value = selectValue || '';
        }
    }

    // Load values when the page is loaded
    window.addEventListener('load', loadFromLocalStorage);

    // Save values when the page is unloaded
    window.addEventListener('beforeunload', saveToLocalStorage);
