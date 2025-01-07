function randomNumber(min, max) {
    return min + Math.floor((max + 1 - min) * Math.random());
};

function numberDivs() {
    numberContainerDom.innerHTML = "";
    let inputValue = createInputDom.value;
    let numberOfDivs = Number(inputValue);

    for (let i = 0; i < numberOfDivs; i++) {
        let numberDivDom = document.createElement("div");
        numberDivDom.textContent = randomNumber(0, 99);
        numberDivDom.classList.add("numberDivsCSS");
        numberDivDom.classList.add("box");
        numberContainerDom.appendChild(numberDivDom);
    }
};

let homeLinkContainerDom = document.createElement("div");
let homeLinkDom = document.createElement("a");
homeLinkDom.setAttribute("href", "../index.html");
homeLinkDom.textContent = "Home";
homeLinkDom.classList.add("home_link");
homeLinkContainerDom.appendChild(homeLinkDom);
document.body.prepend(homeLinkContainerDom);

const randomNumberDivDom = document.querySelector(".numberCreationDiv");

const numberContainerDom = document.querySelector(".numberContainer");

const pDom = document.createElement("p");
pDom.textContent = "How many numbers in the grid?";
pDom.classList.add("padding");

let createInputDom = document.createElement("input");
createInputDom.setAttribute("type", "text");


createInputDom.classList.add("padding");

const buttonDom = document.createElement("button");
buttonDom.textContent = "Create";
buttonDom.classList.add("padding");

randomNumberDivDom.appendChild(pDom);
randomNumberDivDom.appendChild(createInputDom);
randomNumberDivDom.appendChild(buttonDom);

buttonDom.addEventListener("click", numberDivs);