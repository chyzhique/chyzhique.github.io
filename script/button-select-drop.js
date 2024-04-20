function checkAnswer(element) {
    // Reset the background color of the select element
    element.classList.remove('correct', 'incorrect');

    // Check if the selected answer is correct
    const correctAnswer = element.parentElement.getAttribute('data-correct');
    const selectedOption = element.options[element.selectedIndex];
    if (selectedOption.value === correctAnswer) {
      element.classList.add('correct');
    } else {
      element.classList.add('incorrect');
    }
  }

  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', function() {
      checkAnswer(this);
    });
  });
