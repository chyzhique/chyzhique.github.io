    // Function to save values to local storage
    function saveToLocalStorage(selectId) {
      // Get the document title
      var documentTitle = document.title;

      // Get the select element
      var selectElement = document.getElementById(selectId);

      // Save value to local storage with prefixed ID
      localStorage.setItem(documentTitle + '_' + selectId, selectElement.value);
    }

    // Event listeners to trigger save automatically for each select element
    var selectElements = document.getElementsByClassName('select-element');
    
    Array.from(selectElements).forEach(function(selectElement) {
      selectElement.addEventListener('change', function() {
        saveToLocalStorage(selectElement.id);
      });

      // Load values from local storage on page load for each select element
      document.addEventListener('DOMContentLoaded', function() {
        // Get the document title
        var documentTitle = document.title;

        // Load values from local storage and set them to the select elements
        Array.from(selectElements).forEach(function(selectElement) {
          var storedValue = localStorage.getItem(documentTitle + '_' + selectElement.id);

          // Check if value is stored and not null
          if (storedValue !== null) {
            selectElement.value = storedValue;
          }
        });
      });
    });
