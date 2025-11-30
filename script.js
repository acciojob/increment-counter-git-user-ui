//your JS code here. If required.
const counterAdd = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

function increaseCounter() {
  alert(counterAdd.textContent);
  let currentValue = parseInt(counterAdd.textContent, 10)||0; 
  counterAdd.textContent = currentValue + 1;
}

btn.addEventListener("click", increaseCounter);
