function findSumOfAllDivs() {

    sumMarkedInputDom.textContent = "   -   ";

    let divArray = Array.from(document.querySelectorAll(".numberDivs"));
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


function findSumOfMarkedDivs() {

    let divArray = Array.from(document.querySelectorAll(".numberDivs"));

    let sumOfMarked = 0;
    sumMarkedInputDom.value = " - ";
    divArray.forEach(div => {
        div.classList.remove("found");
    });

    divArray.forEach(div => {
        div.addEventListener("click", () => {
            div.classList.add("found");
            let divNumber = Number(div.textContent);
            sumOfMarked += divNumber;

            sumMarkedInputDom.value = sumOfMarked;

        })
    });

}



let sumAllInputDom = document.querySelector("#sum_all");
let sumMarkedInputDom = document.querySelector("#sum_marked");
let resetButton = document.querySelector("#reset");


buttonDom.addEventListener("click", () => {
    findSumOfMarkedDivs();
    findSumOfAllDivs();
});

resetButton.addEventListener("click", () => {
    findSumOfMarkedDivs();
    findSumOfAllDivs();
})
