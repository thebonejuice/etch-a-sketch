const title = document.createElement("h1");
title.textContent="Etch A Sketch! By TheBoneJuice";

const warning = document.createElement("h3");
warning.textContent="When creating a new grid, please ONLY USE NUMBERS from 1-100.";

document.body.appendChild(title);
document.body.appendChild(warning);

const gridBtn = document.createElement("button");
gridBtn.textContent="Create a new grid!";
document.body.appendChild(gridBtn);

const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

document.body.appendChild(containerDiv);

for(i = 0; i < 16; i++){
    const row = document.createElement("div");
    containerDiv.appendChild(row);
    row.classList.add("row");
    for(j = 0; j < 16; j++){
        const col = document.createElement("div");
        row.appendChild(col);
        col.classList.add("col");
    }
}

let elementsArray = document.querySelectorAll(".col");

elementsArray.forEach(function(div){
    div.addEventListener("mouseover", function(){
        this.style.backgroundColor="black";
    });
});

gridBtn.addEventListener("click", (event) => {
    var gridSize = 0;

    while(1===1){
        gridSize = prompt("What size would you like your grid to be?");
        if(gridSize === '' || isNaN(gridSize) === true || gridSize <= 0 || gridSize > 100){
            console.log("Only numbers from 1 to 100 are allowed, dipstick.");
        }else{
            break;
        }
    }

    containerDiv.innerHTML = '';

    for(i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        containerDiv.appendChild(row);
        row.classList.add("row");
        for(j = 0; j < gridSize; j++){
            const col = document.createElement("div");
            row.appendChild(col);
            col.classList.add("col");
        }
    }

    let elementsArray = document.querySelectorAll(".col");

    elementsArray.forEach(function(div){
        div.addEventListener("mouseover", function(){
            this.style.backgroundColor="black";
        });
    });
});



