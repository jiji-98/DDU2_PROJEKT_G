function updateInteractivity() {

    let divArray = document.querySelectorAll(".numberDivs");

    divArray.forEach(div => {
        div.classList.add("divis")
    })

    divArray.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.classList.contains("divis")) {
                div.classList.add("target");
                div.classList.remove("divis");
            } else if (div.classList.contains("target")) {
                div.classList.remove("target");
                div.classList.add("divis");
                div.textContent = randomNumber(0, 99);
            }
        });
    });
};

function clearInteractivity() {
    let divArray = document.querySelectorAll(".numberDivs");
    divArray.forEach(div => {
        if (div.classList.contains("target")) {
            div.classList.remove("target");
            div.classList.add("divis");
            div.textContent = randomNumber(0, 99);
        }
    });
};

let clearButton = document.querySelector("#clear_button");

clearButton.addEventListener("click", clearInteractivity);

buttonDom.addEventListener("click", updateInteractivity);