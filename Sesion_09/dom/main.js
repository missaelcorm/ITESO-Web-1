console.log('here!');

const minusBtn = document.getElementById("minus");
const numSpan = document.getElementById("num");
const plusBtn = document.getElementById("plus");
let num = Number.parseInt(numSpan.innerText, 10);

minusBtn.addEventListener('click', function() {
    num--;
    numSpan.innerText = num;
});

plusBtn.addEventListener('click', function() {
    num++;
    numSpan.innerText = num;
});