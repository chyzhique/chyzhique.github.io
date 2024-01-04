document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('input[type="text"]');
    const changeDivs = document.querySelectorAll('.changeDiv');

    inputFields.forEach((input, index) => {
      const correctOptions = input.dataset.correctOptions.split(',').map(option => option.trim().toLowerCase());

      input.addEventListener('input', function () {
        const enteredWord = input.value.trim().toLowerCase();

        if (correctOptions.includes(enteredWord)) {
          changeDivs[index].style.backgroundColor = '#77DD77'; // Change background color to green if correct word is entered
        } else {
          changeDivs[index].style.backgroundColor = ''; // Reset background color if a different word is entered
        }
      });
    });
  });
