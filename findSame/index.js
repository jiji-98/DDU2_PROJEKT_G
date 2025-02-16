function findCopiesOfDiv() {

    let divArray = Array.from(document.querySelectorAll(".numberDivs"));

    divArray.forEach(div => {
        div.addEventListener("click", function () {
            let numberOfFoundDivs = 0;

            divArray.forEach(div => div.classList.remove("found"));

            copiesPDom.textContent = `Click on a number to find copies`;

            for (let otherDiv of divArray) {

                if (div.textContent == otherDiv.textContent) {
                    div.classList.add("found");
                    otherDiv.classList.add("found");
                    numberOfFoundDivs++;
                } else {
                    copiesPDom.textContent = `1 copies of the number ${div.textContent}`;
                };
            };
            copiesPDom.textContent = `${numberOfFoundDivs} copies of ${div.textContent}`;

        });

    });
};

function resetDivs() {
    
    let divArray = Array.from(document.querySelectorAll(".numberDivs"));
    
    divArray.forEach(div => {
        div.classList.remove("found");
        copiesPDom.textContent = `Click on a number to find copies`;
    });

}

let copiesPDom = document.querySelector("#find_same_p");

let resetButton = document.querySelector("#reset_button");

resetButton.addEventListener("click", resetDivs);

buttonDom.addEventListener("click", findCopiesOfDiv);