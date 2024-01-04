// Handling <select> elements
const selects = document.querySelectorAll('select');

selects.forEach(select => {
  const key = select.id;

  const savedValue = localStorage.getItem(key);
  
  select.value = savedValue || (select.options[0] && select.options[0].value);

  select.addEventListener('change', () => {
    localStorage.setItem(key, select.value);
  });
});

// Handling <li> elements
const lis = document.querySelectorAll('li');

lis.forEach(li => {
  const key = `${document.title}_${li.id}`;
  const savedColor = localStorage.getItem(key + '-color');

  if (savedColor) {
    li.style.backgroundColor = savedColor;
  } else {
    const defaultColor = savedColor === li.dataset.correctValue ? '#77DD77' : '#ff6961';

    li.style.backgroundColor = defaultColor;
  }

  li.addEventListener('click', () => {
    const newColor = 'lightblue';
    li.style.backgroundColor = newColor;
    localStorage.setItem(key + '-color', newColor);
  });
});
