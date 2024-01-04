// your-script.js
function SaveInputValueAndColor(input) {
  if (input instanceof HTMLInputElement) {
    localStorage.setItem(input.id, JSON.stringify({ value: input.value, bgColor: input.style.backgroundColor }));
  }
}

function setInputValueAndColor(inputId, savedValue) {
  const input = document.getElementById(inputId);
  if (input instanceof HTMLInputElement && savedValue) {
    const parsedValue = JSON.parse(savedValue);
    input.value = parsedValue.value;
    input.style.backgroundColor = parsedValue.bgColor;
  }
}

function getDynamicPrefixedId(originalId) {
  const documentTitle = document.title.replace(/[^a-z0-9]/gi, ''); // Remove non-alphanumeric characters
  return `${documentTitle}-${originalId}`;
}

document.addEventListener('DOMContentLoaded', function () {
  // Get all input elements on the page
  const allInputs = document.querySelectorAll('input');

  // Iterate over each input element and set its value and background color
  allInputs.forEach(function (input) {
    // Set dynamic prefixed ID for the input element
    const originalId = input.id;
    const dynamicPrefixedId = getDynamicPrefixedId(originalId);
    input.id = dynamicPrefixedId;

    // Get saved value and background color from local storage and set input value and background color
    const savedValue = localStorage.getItem(dynamicPrefixedId);
    setInputValueAndColor(dynamicPrefixedId, savedValue);
  });
});

document.addEventListener('input', function (event) {
  // Save value and background color when an input element changes
  const targetElement = event.target;
  if (targetElement instanceof HTMLInputElement) {
    SaveInputValueAndColor(targetElement);
  }
});
