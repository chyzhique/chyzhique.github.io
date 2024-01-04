function SaveSelectValue(el) {
  localStorage.setItem(el.id, el.value);
}
function LoadSelectValue(el) {
  return localStorage.getItem(el.id);
}

for (let i = 1; i <= 55; i++) {
    let selectCheck = document.querySelector("[id='select" + i + "']");
    selectCheck.value = LoadSelectValue(selectCheck);
  }
