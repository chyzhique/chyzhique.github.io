  function checkAnswer(button) {
    // Reset all buttons to default state
    let buttons = button.parentElement.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('correct', 'incorrect');
    }

    // Check if the selected answer is correct
    let correctAnswer = button.parentElement.getAttribute('data-correct');
    if (button.id === correctAnswer) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
    }
  }

  function toggleCrossed(element) {
    element.classList.toggle("crossed");
  }
