 function checkAnswer(selectElement) {
    // Reset the background color of the select element
    selectElement.classList.remove('correct', 'incorrect');

    // Check if the selected answer is correct
    const correctAnswer = selectElement.parentElement.getAttribute('data-correct');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption.value === correctAnswer) {
      selectElement.classList.add('correct');
    } else {
      selectElement.classList.add('incorrect');
    }
  }
