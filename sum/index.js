function findSumOfAllDivs() {

    sumMarkedInputDom.textContent = "   -   ";
    let divArray = document.querySelectorAll(".numberDivsCSS");
    let sumOfAll = 0;

    divArray.forEach(div => {
        div.classList.remove("found");
    });

    divArray.forEach(div => {
        let divNumber = Number(div.textContent);
        sumOfAll += divNumber;

    });

    sumAllInputDom.value = sumOfAll;
}

buttonDom.addEventListener("click", () => {
    findSumOfMarkedDivs();
    findSumOfAllDivs();
});
