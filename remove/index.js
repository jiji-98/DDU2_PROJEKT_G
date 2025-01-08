function findRandomNumberInDivs() {
    let divArray = document.querySelectorAll(".numberDivsCSS");
    let randomNumberForDiv = randomNumber(0, 99);
    removedNumberInputDom.value = ` - `;

    divArray.forEach(div => {

        if (div.classList.contains("found_removed")) return;

        if (div.classList.contains("found_remove")) {
            div.classList.remove("found_remove");
        }
        randomNumberInputDom.value = `${randomNumberForDiv}`;

        if (randomNumberForDiv === Number(div.textContent)) {
            div.classList.add("found_remove");

        }
    });

}


function removeMarkedDiv() {
    let divsToRemove = document.querySelectorAll(".found_remove");

    if (divsToRemove.length === 0) {
        removedNumberInputDom.value = `There is nothing to remove`;
        return;
    }

    divsToRemove.forEach(div => {
        div.classList.add("found_removed");
        div.classList.remove("found_remove");
        div.textContent = "X";
    });

    removedNumberInputDom.value = `${randomNumberInputDom.value} removed ${divsToRemove.length} time(s)`;

}

let randomNumberButton = document.querySelector("#random_number_button");
let randomNumberInputDom = document.querySelector("#random_number_box");

let removeButton = document.querySelector("#remove_button");
let removedNumberInputDom = document.querySelector("#removed_number_box");


randomNumberButton.addEventListener("click", findRandomNumberInDivs);

removeButton.addEventListener("click", removeMarkedDiv)
