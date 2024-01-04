document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('select');
  const tds = document.querySelectorAll('li');

  // Function to get a unique key based on document title and element ID
  function getKey(element) {
    return `${document.title}_${element.id}`;
  }

  // Handle select elements
  selects.forEach(select => {
    const key = getKey(select);

    // Check if there is a saved value in local storage
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      select.value = savedValue;
    }

    // Add change event listener to save selected value to local storage
    select.addEventListener('change', function () {
      localStorage.setItem(key, select.value);
    });
  });

  // Handle li elements (background color changes)
  tds.forEach(td => {
    const key = getKey(td);

    // Check if there is a saved background color in local storage
    const savedColor = localStorage.getItem(key + '-color');
    if (savedColor) {
      td.style.backgroundColor = savedColor;
    }

    // Add click event listener to change background color and save to local storage
    td.addEventListener('click', function () {
      const newColor = /* get the new color from your existing logic */;
      td.style.backgroundColor = newColor;

      // Save the new background color to local storage
      localStorage.setItem(key + '-color', newColor);
    });
  });
