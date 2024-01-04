    // Function to save values to local storage
    function saveToLocalStorage() {
      // Get the document title
      var documentTitle = document.title;

      // Get the select and input elements
      var selectElement = document.getElementById('selectElement');
      var inputElement = document.getElementById('inputElement');

      // Save values to local storage with prefixed IDs
      localStorage.setItem(documentTitle + '_selectElement', selectElement.value);
      localStorage.setItem(documentTitle + '_inputElement', inputElement.value);
    }

    // Event listeners to trigger save automatically
    document.getElementById('selectElement').addEventListener('change', function() {
      saveToLocalStorage();
    });

    document.getElementById('inputElement').addEventListener('input', function() {
      saveToLocalStorage();
    });

    // Load values from local storage on page load
    window.onload = function() {
      // Get the document title
      var documentTitle = document.title;

      // Get the select and input elements
      var selectElement = document.getElementById('selectElement');
      var inputElement = document.getElementById('inputElement');

      // Load values from local storage and set them to the elements
      selectElement.value = localStorage.getItem(documentTitle + '_selectElement') || '';
      inputElement.value = localStorage.getItem(documentTitle + '_inputElement') || '';
    };
