    const varSpans = document.querySelectorAll('.var');

    varSpans.forEach(varSpan => {
      const radios = varSpan.querySelectorAll('input[type="radio"]');
      const resultMessage = varSpan;

      radios.forEach(radioButton => {
        radioButton.addEventListener('change', function() {
          if (radioButton.checked) {
            if (radioButton.getAttribute('data-correct') === 'true') {
              resultMessage.classList.add('highlight');
            } else {
              resultMessage.classList.remove('highlight');
            }
          }
        });
      });
    });
