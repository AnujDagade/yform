import { addComp } from "./addComp";
let counter = 0;

const addTextBox = document.querySelector("#textBox");
addTextBox.addEventListener("click", () => {
	addComp(++counter);
});

