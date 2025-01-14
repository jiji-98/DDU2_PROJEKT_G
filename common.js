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
        numberDivDom.classList.add("numberDivs");
        numberContainerDom.appendChild(numberDivDom);
    }
};

let linkContainerDom = document.createElement("div");
let homeLinkDom = document.createElement("a");
homeLinkDom.setAttribute("href", "../index.html");
homeLinkDom.textContent = "Home";
homeLinkDom.classList.add("wrapper");
linkContainerDom.appendChild(homeLinkDom);

let githubLinkDom = document.createElement("a");
githubLinkDom.setAttribute("href", "https://github.com/jiji-98/DDU2_PROJEKT_G");
githubLinkDom.id = "gitHub";
githubLinkDom.textContent = "Visit my gitHub profile here :)";
linkContainerDom.appendChild(githubLinkDom);

const randomNumberDivDom = document.createElement("div");
randomNumberDivDom.classList.add("wrapper");


const numberContainerDom = document.createElement("div");
numberContainerDom.classList.add("numberContainer");

const pDom = document.createElement("p");
pDom.textContent = "How many numbers in the grid?";
pDom.classList.add("padding");

let createInputDom = document.createElement("input");
createInputDom.setAttribute("type", "text");
createInputDom.classList.add("box");


createInputDom.classList.add("padding");

const buttonDom = document.createElement("button");
buttonDom.textContent = "Create";
buttonDom.classList.add("padding");


randomNumberDivDom.appendChild(pDom);
randomNumberDivDom.appendChild(createInputDom);
randomNumberDivDom.appendChild(buttonDom);
document.body.prepend(randomNumberDivDom);
document.body.prepend(linkContainerDom);
document.body.append(numberContainerDom);

buttonDom.addEventListener("click", numberDivs);