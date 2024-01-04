    // Function to save values to local storage
    function saveToLocalStorage(selectId) {
      // Get the document title
      var documentTitle = document.title;

      // Get the select element
      var selectElement = document.getElementById(selectId);
        var inputElement = document.getElementById(inputId);
        var bgElement = document.getElementById(tdId);

      // Save value to local storage with prefixed ID
      localStorage.setItem(documentTitle + '_' + selectId, selectElement.value);
        localStorage.setItem(documentTitle + '_' + inputId, selectElement.value);
        localStorage.setItem(documentTitle + '_' + tdId, selectElement.value);
    }

    // Event listeners to trigger save automatically for each select element
    var selectElements = document.getElementsByClassName('select-element');
    var inputElements = document.getElementsByClassName('input-element');
    var tdElements = document.getElementsByClassName('td-element');
    
    Array.from(selectElements).forEach(function(selectElement) {
      selectElement.addEventListener('change', function() {
        saveToLocalStorage(selectElement.id);
      });

    Array.from(inputElements).forEach(function(inputElement) {
      inputElement.addEventListener('change', function() {
        saveToLocalStorage(inputElement.id);
      });

    Array.from(tdElements).forEach(function(tdElement) {
      tdElement.addEventListener('change', function() {
        saveToLocalStorage(tdElement.id);
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

        Array.from(inputElements).forEach(function(inputElement) {
          var storedValue = localStorage.getItem(documentTitle + '_' + inputElement.id);
          // Check if value is stored and not null
          if (storedValue !== null) {
            inputElement.value = storedValue;
          }

        Array.from(tdElements).forEach(function(tdElement) {
          var storedValue = localStorage.getItem(documentTitle + '_' + tdElement.id);
          // Check if value is stored and not null
          if (storedValue !== null) {
            inputElement.value = storedValue;
          }
        });
      });
    });
