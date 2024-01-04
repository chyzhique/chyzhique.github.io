const varSpans = document.querySelectorAll('.var');

varSpans.forEach(varSpan => {
  const radios = varSpan.querySelectorAll('input[type="radio"]');
  const resultMessage = varSpan;

  radios.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
      if (radioButton.checked) {
        if (radioButton.getAttribute('data-correct') === 'true') {
          resultMessage.style.backgroundColor = '#77DD77'; // Set your desired color here
        } else {
          resultMessage.style.backgroundColor = '#ff6961'; // Reset to default color if needed
        }
      }
    });
  });
});
