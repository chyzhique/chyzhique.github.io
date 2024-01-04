document.addEventListener('DOMContentLoaded', function () {
  const tds = document.querySelectorAll('li');

  // Add click event listener to change background color
  tds.forEach(td => {
    td.addEventListener('click', function () {
      const newColor = getRandomColor(); // Replace this with your logic to get a new color

      td.style.backgroundColor = newColor;
      
      // Save the new background color to local storage
      const key = `${document.title}_${td.id}`;
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
