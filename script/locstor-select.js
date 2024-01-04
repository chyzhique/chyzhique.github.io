function SaveSelectValue(el) {
  localStorage.setItem(el.name, el.value);
}
function LoadSelectValue(el) {
  return localStorage.getItem(el.name);
}

let selectCheck = document.querySelector("[name='selectcheck']");
selectCheck.value = LoadSelectValue(selectCheck);
