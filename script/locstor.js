document.addEventListener('DOMContentLoaded', function () {
  // Handling <select> elements
  const selects = document.querySelectorAll('select');

  selects.forEach(select => {
    const key = select.id;

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

  // Handling <li> elements
  const lis = document.querySelectorAll('li');

  // Add click event listener to change background color
  lis.forEach(li => {
    const key = `${document.title}_${li.id}`;
    const savedColor = localStorage.getItem(key + '-color');

    // Set background color based on comparison with data-correct-value
    if (savedColor === li.dataset.correctValue) {
      li.style.backgroundColor = '#77DD77'; // Green color
    } else {
      li.style.backgroundColor = '#ff6961'; // Red color
    }

    // Add click event listener to update and save background color
    li.addEventListener('click', function () {
      // Example: Get the new color from your existing logic or set it to a specific color
      const newColor = 'lightblue';

      li.style.backgroundColor = newColor;

      // Save the new background color to local storage
      localStorage.setItem(key + '-color', newColor);
    });
  });
});
