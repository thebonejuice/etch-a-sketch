const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

document.body.appendChild(containerDiv);

for(i = 0; i < 60; i++){
    const row = document.createElement("div");
    containerDiv.appendChild(row);
    row.classList.add("row");
    for(j = 0; j < 60; j++){
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

