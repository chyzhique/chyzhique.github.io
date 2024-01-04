document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('select');
  const tds = document.querySelectorAll('li');

  selects.forEach(select => {
    const key = `${document.title}_${select.id}`;

    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      select.value = savedValue;
    }

    select.addEventListener('change', function () {
      localStorage.setItem(key, select.value);
    });
  });

  tds.forEach(td => {
    const key = `${document.title}_${td.id}`;

    const savedColor = localStorage.getItem(key + '-color');
    if (savedColor) {
      td.style.backgroundColor = savedColor;
    }
  });

  // After loading data, initiate select-drop.js
  initSelectDrop();
});

function initSelectDrop() {
  // Assuming there is an initialization function in select-drop.js, replace it accordingly
  if (typeof initSelectDropScript === 'function') {
    initSelectDropScript();
  }
}
