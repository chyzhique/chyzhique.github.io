  function setTdBackgroundColor(selectId, tdId) {
    const select = document.getElementById(selectId);
    const td = document.getElementById(tdId);
    const correctValue = select.getAttribute('data-correct-value');

    select.addEventListener('change', function () {
      if (select.value === correctValue) {
        td.style.backgroundColor = '#77DD77'; // Change the background color for the correct value
      } else {
        td.style.backgroundColor = '#ff6961'; // Reset the background color if a different option is selected
      }
    });
  }

  // Call the function for each select and corresponding td
  setTdBackgroundColor('select1', 'td1');
  setTdBackgroundColor('select2', 'td2');
  setTdBackgroundColor('select3', 'td3');
  setTdBackgroundColor('select4', 'td4');
  setTdBackgroundColor('select5', 'td5');
  setTdBackgroundColor('select6', 'td6');
  setTdBackgroundColor('select7', 'td7');
  setTdBackgroundColor('select8', 'td8');
  setTdBackgroundColor('select9', 'td9');
  setTdBackgroundColor('select10', 'td10');
  setTdBackgroundColor('select11', 'td11');
  setTdBackgroundColor('select12', 'td12');
  setTdBackgroundColor('select13', 'td13');
  setTdBackgroundColor('select14', 'td14');
