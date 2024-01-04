  // Function to save values to local storage
    function saveToLocalStorage(elementId) {
      var element = document.getElementById(elementId);
      var documentTitle = document.title;

      localStorage.setItem(documentTitle + '_' + elementId, element.value || element.innerText);
    }

    // Event listeners to trigger save automatically for each element
    $('.select-element, .input-element, .td-element').on('input change', function() {
      saveToLocalStorage(this.id);
    });

    // Load values from local storage on page load for each element
    function loadSettings() {
      var documentTitle = document.title;

      $('.select-element, .input-element, .td-element').each(function() {
        var storedValue = localStorage.getItem(documentTitle + '_' + this.id);
        if (storedValue !== null) {
          if ($(this).is('select')) {
            $(this).val(storedValue);
          } else if ($(this).is('input') || $(this).is('td')) {
            $(this).val(storedValue);
          }
        }
      });
    }

    // Call loadSettings when the document is ready
    $(document).ready(function() {
      loadSettings();
    });
