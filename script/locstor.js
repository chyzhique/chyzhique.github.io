function saveToLocalStorage(identifier) {
    // Iterate over text inputs
    document.querySelectorAll(`.${identifier}-word-input`).forEach((input, i) => {
        const wordInputValue = input.value;
        localStorage.setItem(`${identifier}-wordInput${i + 1}`, wordInputValue);
    });

    // Iterate over radio buttons
    document.querySelectorAll(`.${identifier}-radio`).forEach((radio, i) => {
        const radioChecked = radio.querySelector('input[name^="word"]:checked');
        if (radioChecked) {
            localStorage.setItem(`${identifier}-radio${i + 1}Value`, radioChecked.value);
        }
    });

    // Iterate over select boxes
    document.querySelectorAll(`.${identifier}-select`).forEach((select, i) => {
        const selectValue = select.value;
        localStorage.setItem(`${identifier}-select${i + 1}Value`, selectValue);
    });

    // Save class names for elements that may change dynamically
    document.querySelectorAll(`.${identifier}-dynamic-class`).forEach((element, i) => {
        const elementClassNames = Array.from(element.classList);
        localStorage.setItem(`${identifier}-dynamicClassNames${i + 1}`, JSON.stringify(elementClassNames));
    });
}

function loadFromLocalStorage(identifier) {
    // Iterate over text inputs
    document.querySelectorAll(`.${identifier}-word-input`).forEach((input, i) => {
        const wordInputValue = localStorage.getItem(`${identifier}-wordInput${i + 1}`);
        input.value = wordInputValue || '';
    });

    // Iterate over radio buttons
    document.querySelectorAll(`.${identifier}-radio`).forEach((radio, i) => {
        const radioValue = localStorage.getItem(`${identifier}-radio${i + 1}Value`);
        if (radioValue) {
            radio.querySelector(`input[name^="word"][value="${radioValue}"]`).checked = true;
        }
    });

    // Iterate over select boxes
    document.querySelectorAll(`.${identifier}-select`).forEach((select, i) => {
        const selectValue = localStorage.getItem(`${identifier}-select${i + 1}Value`);
        select.value = selectValue || '';
    });

    // Restore class names for dynamically changing elements
    document.querySelectorAll(`.${identifier}-dynamic-class`).forEach((element, i) => {
        const storedClassNames = localStorage.getItem(`${identifier}-dynamicClassNames${i + 1}`);
        if (storedClassNames) {
            const classNamesArray = JSON.parse(storedClassNames);
            element.classList.add(...classNamesArray);
        }
    });
}

// Example: Load values when the page is loaded
window.addEventListener('load', function() {
    loadFromLocalStorage('document1');
});

// Example: Save values when the page is unloaded
window.addEventListener('beforeunload', function() {
    saveToLocalStorage('document1');
});
