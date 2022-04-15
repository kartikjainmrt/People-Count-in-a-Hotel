//document.getElementById("count-el").innerHTML=5;
let count = 0 ;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


function increment(){
    count = count + 1 ;
    countEl.innerHTML = count;
}

function save(){
    let countstr = count + "-";
    saveEl.textContent += countstr; //for equal spacing
    countEl.textContent = 0 ;
    count = 0 ;
}