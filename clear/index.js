function updateInteractivity() {

    let divArray = document.querySelectorAll(".numberDivsCSS");

    divArray.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.classList.contains("div_box")) {
                div.classList.add("target");
                div.classList.remove("div_box");
            } else if (div.classList.contains("target")) {
                div.classList.remove("target");
                div.classList.add("div_box");
                div.textContent = randomNumber(0, 99);
            }
        });

    });

};

function clearInteractivity() {
    let divArray = document.querySelectorAll(".numberDivsCSS");
    divArray.forEach(div => {
        if (div.classList.contains("target")) {
            div.classList.remove("target");
            div.classList.add("div_box");
            div.textContent = randomNumber(0, 99);
        }
    });
};

let clearButton = document.querySelector("#clear_button");

clearButton.addEventListener("click", clearInteractivity);

buttonDom.addEventListener("click", updateInteractivity);