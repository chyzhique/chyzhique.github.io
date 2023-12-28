function makeEditable(element) {
    if (element.getAttribute('contenteditable') === 'true') {
      element.focus();
      element.addEventListener('input', function() {
        // Get the correct variant from the data-correct attribute
        var correctVariant = element.getAttribute('data-correct').toLowerCase();
        
        // Check if the entered text is correct
        var isCorrect = checkCorrectness(element.innerText.trim(), correctVariant);
        
        // Add or remove the 'correct' class based on correctness
        if (isCorrect) {
          element.style.backgroundColor = '#aaffaa';
        } else {
          element.classList.remove('correct');
        }
      });
    }
  }

  function checkCorrectness(enteredText, correctVariant) {
    // Replace this function with your logic to check correctness
    // For example, you might compare 'enteredText' with 'correctVariant'
    return enteredText.toLowerCase() === correctVariant;
  }
  
  function showTooltip(message) {
    alert(message); // You can replace this with your custom tooltip implementation
  }
