export function addComp(id) {
	console.info("Function addComp ran");
	const question = prompt("Enter Question");
	let comp = `<div class="inp">
                <label for="q${id}">${question}</label>
                <input type="text" id="q${id}"><br>
                </div>`;

	const view = document.querySelector(".view");

	view.innerHTML += comp;

}