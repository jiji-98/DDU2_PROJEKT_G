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

const linkContainerDom = document.createElement("div");
linkContainerDom.classList.add("link_container");


const homeLinkDom = document.createElement("a");
homeLinkDom.setAttribute("href", "../index.html");
homeLinkDom.textContent = "Home";
homeLinkDom.classList.add("wrapper");
linkContainerDom.appendChild(homeLinkDom);

const githubLinkDom = document.createElement("a");
githubLinkDom.setAttribute("href", "https://github.com/jiji-98/DDU2_PROJEKT_G");
githubLinkDom.classList.add("link");
githubLinkDom.classList.add("box");
githubLinkDom.textContent = "GitHub";
linkContainerDom.append(githubLinkDom);

const webshareLinkDom = document.createElement("a");
webshareLinkDom.setAttribute("href", "https://webshare.mah.se/ap6593/DDU2_projekt/index.html");
webshareLinkDom.classList.add("link");
webshareLinkDom.classList.add("box");
webshareLinkDom.textContent = "Webshare";
linkContainerDom.append(webshareLinkDom);


const createNumberDivDom = document.createElement("div");
createNumberDivDom.classList.add("wrapper");

const pDom = document.createElement("p");
pDom.textContent = "How many numbers in the grid?";
pDom.classList.add("padding");

const createInputDom = document.createElement("input");
createInputDom.setAttribute("type", "text");
createInputDom.classList.add("box");
createInputDom.classList.add("padding");

const buttonDom = document.createElement("button");
buttonDom.textContent = "Create";
buttonDom.classList.add("padding");

const numberContainerDom = document.createElement("div");
numberContainerDom.classList.add("numberContainer");


createNumberDivDom.appendChild(pDom);
createNumberDivDom.appendChild(createInputDom);
createNumberDivDom.appendChild(buttonDom);
document.body.prepend(createNumberDivDom);
document.body.prepend(linkContainerDom);
document.body.append(numberContainerDom);


buttonDom.addEventListener("click", numberDivs);