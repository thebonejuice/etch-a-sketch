const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

document.body.appendChild(containerDiv);

for(i = 0; i < 15; i++){
    const row = document.createElement("div");
    containerDiv.appendChild(row);
    row.classList.add("row");
    for(j = 0; j < 15; j++){
        const col = document.createElement("div");
        row.appendChild(col);
        col.classList.add("col");
        col.textContent= ".";
    }
}

