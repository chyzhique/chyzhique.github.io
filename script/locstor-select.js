
        function SaveSelectValue(select) {
      localStorage.setItem(select.id, select.value);
    }

    function setSelectedOption(selectId, savedValue) {
      const select = document.getElementById(selectId);
      if (select) {
        const options = select.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === savedValue) {
            options[i].selected = true;
            break;
          }
        }
      }
    }

    function getDynamicPrefixedId(originalId) {
      const documentTitle = document.title.replace(/[^a-z0-9]/gi, ''); // Remove non-alphanumeric characters
      return `${documentTitle}-${originalId}`;
    }

    document.addEventListener('DOMContentLoaded', function () {
      // Get all select elements on the page
      const allSelects = document.querySelectorAll('select');

      // Iterate over each select element and set its selected option
      allSelects.forEach(function (select) {
        // Set dynamic prefixed ID for the select element
        const originalId = select.id;
        const dynamicPrefixedId = getDynamicPrefixedId(originalId);
        select.id = dynamicPrefixedId;

        // Get saved value from local storage and set selected option
        const savedValue = localStorage.getItem(dynamicPrefixedId);
        setSelectedOption(dynamicPrefixedId, savedValue);
      });
    });
    
