import { addComp } from "./addComp";
let counter = 0;


const addTextBox = document.querySelector("#textBox");
addTextBox.addEventListener("click", () => {
	addComp(++counter);
});

const submit = document.querySelector("#submit");



submit.addEventListener("click", async () => {
	console.log("ho");
	const formHTML = document.querySelector(".view").innerHTML;
	const userName = prompt("your name");
	const formName = prompt(" form name must be unique");
	
	// const res = await fetch("https://8000-anujdagade-yform-g84ga1k52dw.ws-us108.gitpod.io/form/save", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify({ userName, formName, formHTML}),
	// });
	// const data = await res.json();
	// console.log(data);

});
