const idForm = document.querySelector("#form");

idForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    const formId = document.querySelector("#formId").value;
    const url = `https://8000-anujdagade-yform-g84ga1k52dw.ws-us108.gitpod.io/form/view/${formId}`;
    console.log(url);
    window.location.href = url
})