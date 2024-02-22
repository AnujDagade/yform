import { addComp } from "./addComp";
let counter = 0;


const addTextBox = document.querySelector("#textBox");
addTextBox.addEventListener("click", () => {
	addComp(++counter);
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", async () => {
	const view = document.querySelector(".view").innerHTML;
	
	const res = await fetch("/api/submit", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ view }),
	});
	const data = await res.json();
	

});
