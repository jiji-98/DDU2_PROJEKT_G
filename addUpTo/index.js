function findAdditionPairForInput() {

    let divArray = document.querySelectorAll(".numberDivsCSS");
    let inputValue = addUpTo_inputDom.value;
    let inputValueNumber = Number(inputValue);
    notFound.textContent = " ";

    divArray.forEach(div => { 
        div.classList.remove("found");
    });

    for (let div1 of divArray) {
        for (let div2 of divArray) {

            let num1 = Number(div1.textContent);
            let num2 = Number(div2.textContent);


            if ((num1 + num2) == inputValueNumber) {
                div1.classList.add("found");
                div2.classList.add("found");
                return;
            }

        };

    };
    return notFound.textContent = "Inga par hittades som summerar till det angivna numret";
};


let addUpToContainer = document.querySelector("#addUpToDiv");

let addUpTo_inputDom = document.querySelector("#addUpTo_input");

let addUpTo_buttonDom = document.querySelector("#addUpTo_button");

let notFound = document.createElement("p");

addUpToContainer.appendChild(notFound);

addUpTo_buttonDom.addEventListener("click", findAdditionPairForInput);