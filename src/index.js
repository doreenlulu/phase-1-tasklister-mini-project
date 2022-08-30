document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		handleToDolist(e.target.description.value);
		// console.log(document.getElementById("description").value);
		form.reset();
	});
});
function handleToDolist(todoitem) {
	let arr = [];
	let ul = document.getElementById("tasks");
	let btn = document.createElement("button");
	btn.addEventListener("click", deletetodo);
	btn.textContent = " x ";
	ul.textContent = `${todoitem}  `;
	ul.appendChild(btn);
	arr.push(todoitem);
	console.log(arr);
	return arr;
}

function deletetodo(e) {
	e.target.parentNode.remove();
}

