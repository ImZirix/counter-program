let myLabel = document.getElementById("myLabel");
const increaseBtn = document.getElementById("increaseBtn");
const restBtn = document.getElementById("restBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    myLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    myLabel.textContent = count;
}

restBtn.onclick = function() {
    count = 0;
    myLabel.textContent = count;
}