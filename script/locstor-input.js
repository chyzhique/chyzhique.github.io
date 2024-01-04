// your-script.js
function SaveInputValue(input) {
  if (input instanceof HTMLInputElement) {
    localStorage.setItem(input.id, input.value);
  }
}

function setInputValue(inputId, savedValue) {
  const input = document.getElementById(inputId);
  if (input instanceof HTMLInputElement) {
    input.value = savedValue;
  }
}

function getDynamicPrefixedId(originalId) {
  const documentTitle = document.title.replace(/[^a-z0-9]/gi, ''); // Remove non-alphanumeric characters
  return `${documentTitle}-${originalId}`;
}

document.addEventListener('DOMContentLoaded', function () {
  // Get all input elements on the page
  const allInputs = document.querySelectorAll('input');

  // Iterate over each input element and set its value
  allInputs.forEach(function (input) {
    // Set dynamic prefixed ID for the input element
    const originalId = input.id;
    const dynamicPrefixedId = getDynamicPrefixedId(originalId);
    input.id = dynamicPrefixedId;

    // Get saved value from local storage and set input value
    const savedValue = localStorage.getItem(dynamicPrefixedId);
    setInputValue(dynamicPrefixedId, savedValue);
  });
});

document.addEventListener('input', function (event) {
  // Save value when an input element changes
  const targetElement = event.target;
  if (targetElement instanceof HTMLInputElement) {
    SaveInputValue(targetElement);
  }
});
