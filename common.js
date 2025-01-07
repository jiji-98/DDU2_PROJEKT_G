function randomNumber(min, max) { //genererar ett slumpmässigt nummer
    return min + Math.floor((max + 1 - min) * Math.random());
};

function numberDivs() { //Ändrad på den 23:e december
    numberContainerDom.innerHTML = "";
    let inputValue = createInputDom.value; //eftersom värdet uppdateras 
    let numberOfDivs = Number(inputValue); // Här omvandlar vi strängen av nummer till nummer.

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
