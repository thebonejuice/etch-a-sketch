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
        col.textContent= "column";
    }
}