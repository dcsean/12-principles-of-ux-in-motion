var element = document.getElementById("valueChange");
var i = 10;


setInterval( increment, 50);

function increment(){
    i = i % 100 + 1;
    element.innerHTML = i + ' %';
    return i;
}
