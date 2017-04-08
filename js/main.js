var element = document.getElementById("valueChange");
var i = 1;


setInterval( increment, 100);

function increment(){
    i = i % 60 + 1;
    element.innerHTML = i;
    return i;
}
