const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ern65yosovqrnrti23zcu76kmi0otfec.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} views!`;
}

updateCounter();