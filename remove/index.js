function findRandomNumberInDivs() {
    let divArray = document.querySelectorAll(".numberDivs");
    let randomNumberForDiv = randomNumber(0, 99);
    randomNumberInputDom.value = `${randomNumberForDiv}`;
    removedNumberInputDom.value = ` - `;

    divArray.forEach(div => {

        if (div.classList.contains("removed")) return;

        if (div.classList.contains("to_be_removed")) {
            div.classList.remove("to_be_removed");
        }

        if (randomNumberForDiv === Number(div.textContent)) {
            div.classList.add("to_be_removed");

        }
    });

}


function removeMarkedDiv() {
    let divsToRemove = document.querySelectorAll(".to_be_removed");

    if (divsToRemove.length === 0) {
        removedNumberInputDom.value = `There is nothing to remove`;
        return;
    }

    divsToRemove.forEach(div => {
        div.classList.add("removed");
        div.classList.remove("to_be_removed");
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
