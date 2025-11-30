//your JS code here. If required.
const counterAdd = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

function increaseCounter() {
 
  let currentValue = parseInt(counterAdd.textContent, 10)||0;
	 alert(currentValue);
  counterAdd.textContent = currentValue + 1;
}

btn.addEventListener("click", increaseCounter);
