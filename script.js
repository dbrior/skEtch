setup(64);

function setup(num) {
    var grid = document.getElementById("grid");
    grid.style.gridTemplateColumns = "repeat(" + num.toString() + ",1fr)";
    grid.style.gridTemplateRows = "repeat(" + num.toString() + ",1fr)";

    for(var i=0;i<num*num;i++){
        var split = 100/num;
        var square = document.createElement("div");
        square.style.width = split.toString() + "vw";
        square.style.height = split.toString() + "vh";
        square.addEventListener('mouseenter', (e) => {
            e.target.classList.add("marked");
        });
        grid.appendChild(square);
    }
}

function reset(){
    var grid = document.getElementById("grid");
    while(grid.lastChild){
        grid.removeChild(grid.lastChild);
    }
    setup(parseInt(prompt("Canvas Dimensions")));     
}