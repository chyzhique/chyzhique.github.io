    // Function to save values to local storage with title prefix
    function SaveSelectValue(el) {
      var documentTitle = document.title;
      localStorage.setItem(documentTitle + '_' + el.name, el.value);
    }

    // Function to load values from local storage with title prefix
    function LoadSelectValue(el) {
      var documentTitle = document.title;
      return localStorage.getItem(documentTitle + '_' + el.name);
    }

    // Function to save values to local storage with title prefix
    function SaveInputValue(el) {
      var documentTitle = document.title;
      localStorage.setItem(documentTitle + '_' + el.name, el.value);
    }

    // Function to load values from local storage with title prefix
    function LoadInputValue(el) {
      var documentTitle = document.title;
      return localStorage.getItem(documentTitle + '_' + el.name);
    }

    // Function to save values to local storage with title prefix
    function SaveTdValue(el) {
      var documentTitle = document.title;
      localStorage.setItem(documentTitle + '_' + el.name, el.innerText);
    }

    // Function to load values from local storage with title prefix
    function LoadTdValue(el) {
      var documentTitle = document.title;
      return localStorage.getItem(documentTitle + '_' + el.name);
    }

    // Load values from local storage on page load for each element
    function loadSettings() {
      var documentTitle = document.title;

      document.querySelectorAll('.select-element').forEach(function(selectElement) {
        var storedValue = LoadSelectValue(selectElement);
        if (storedValue !== null) {
          selectElement.value = storedValue;
        }
      });

      document.querySelectorAll('.input-element').forEach(function(inputElement) {
        var storedValue = LoadInputValue(inputElement);
        if (storedValue !== null) {
          inputElement.value = storedValue;
        }
      });

      document.querySelectorAll('.td-element').forEach(function(tdElement) {
        var storedValue = LoadTdValue(tdElement);
        if (storedValue !== null) {
          tdElement.innerText = storedValue;
        }
      });
    }

    // Call loadSettings when the document is ready
    document.addEventListener('DOMContentLoaded', function() {
      loadSettings();
    });
