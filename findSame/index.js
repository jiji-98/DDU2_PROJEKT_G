function findCopiesOfDiv() {

    let divArray = document.querySelectorAll(".numberDivsCSS");

    divArray.forEach(div => {
        div.addEventListener("click", function () {
            let tempDivArray = [];

            divArray.forEach(div => div.classList.remove("found"));

            copiesPDom.textContent = `Click on a number to find copies`;

            for (let otherDiv of divArray) {

                if (div.textContent == otherDiv.textContent) {
                    div.classList.add("found");
                    otherDiv.classList.add("found");
                    tempDivArray.push(otherDiv);

                } else {
                    copiesPDom.textContent = `1 copies of ${div.textContent}`;
                };
            };
            let numberOfFoundDivs = tempDivArray.length;
            copiesPDom.textContent = `${numberOfFoundDivs} copies of ${div.textContent}`;

        });

    });
};

function resetDivs() {
    let divArray = document.querySelectorAll(".numberDivsCSS");
    divArray.forEach(div => {
        div.classList.remove("found");
        copiesPDom.textContent = `Click on a number to find copies`;
    });

}

