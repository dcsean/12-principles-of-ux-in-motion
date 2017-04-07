var element = document.getElementById("valueChange");
var i = 1;


if (i == 20) {
  setInterval( decrement, 100);
} else {
  setInterval( increment, 100);
}


function increment(){
    i = i % 360 + 1;
    element.innerHTML = i;
    return i;
}

function deincrement(){
    i = i % 360 + 1;
    element.innerHTML = i;
    return i;
}
