document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('select');

  selects.forEach(select => {
    const key = select.id;

    // Check if there is a saved value in local storage
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      select.value = savedValue;
    }

    // Add change event listener to save selected value to local storage
    select.addEventListener('change', function () {
      localStorage.setItem(key, select.value);
    });
  });
});
