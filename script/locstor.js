document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('select');
  const tds = document.querySelectorAll('li');

  selects.forEach(select => {
    const key = `${document.title}_${select.id}`; // Using document title as a prefix

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

  tds.forEach(td => {
    const key = `${document.title}_${td.id}`; // Using document title as a prefix

    // Check if there is a saved background color in local storage
    const savedColor = localStorage.getItem(key + '-color');
    if (savedColor) {
      td.style.backgroundColor = savedColor;
    }
  });

  // Add click event listener to change background color and save to local storage
  tds.forEach(td => {
    td.addEventListener('click', function () {
      const key = `${document.title}_${td.id}`; // Using document title as a prefix
      const newColor = getRandomColor(); // Replace this with your logic to get a new color

      td.style.backgroundColor = newColor;
      localStorage.setItem(key + '-color', newColor);
    });
  });

  // Function to generate a random color (replace with your logic if needed)
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
