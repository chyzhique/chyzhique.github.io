 function checkAnswer(selectElement) {
    // Reset the background color of the select element
    selectElement.classList.remove('correct', 'incorrect');
function checkAnswer(element) {
    // Reset the element to default state
    if (element.tagName === 'BUTTON') {
        let buttons = element.parentElement.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('correct', 'incorrect');
        }

    // Check if the selected answer is correct
    const correctAnswer = selectElement.parentElement.getAttribute('data-correct');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption.value === correctAnswer) {
      selectElement.classList.add('correct');
    } else {
      selectElement.classList.add('incorrect');
        // Check if the selected answer is correct
        let correctAnswer = element.parentElement.getAttribute('data-correct');
        if (element.id === correctAnswer) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }
    } else if (element.tagName === 'SELECT') {
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
  }
}
