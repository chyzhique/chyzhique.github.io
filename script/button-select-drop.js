  function checkAnswer(option) {
    // Reset all buttons to default state
    let buttons = button.parentElement.getElementsByTagName('option');
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('correct', 'incorrect');
    }

    // Check if the selected answer is correct
    let correctAnswer = button.parentElement.getAttribute('data-correct');
    if (option.id === correctAnswer) {
      option.classList.add('correct');
    } else {
      option.classList.add('incorrect');
    }
  }

  function toggleCrossed(element) {
    element.classList.toggle("crossed");
  }
