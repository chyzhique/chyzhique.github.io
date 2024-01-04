function SaveSelectValue(el) {
  localStorage.setItem(el.name, el.value);
}
function LoadSelectValue(el) {
  return localStorage.getItem(el.name);
}

for (let i = 1; i <= 55; i++) {
    let selectCheck = document.querySelector("[name='selectcheck" + i + "']");
    selectCheck.value = LoadSelectValue(selectCheck);
  }
