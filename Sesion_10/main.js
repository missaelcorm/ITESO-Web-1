const form = document.getElementById("form");
const buscarInput = document.querySelector("form > input[name=buscar]");
buscarInput.value = buscarInput.value.trim();
const frutasDiv = document.getElementById("frutas");
const frutas = [];

form.addEventListener("submit", function(e) {
const frutasDiv = document.getElementById("frutas");

    e.preventDefault();

    if(buscarInput.value != ""){
        alert("Sent");
        
        const text = buscarInput.value;

        frutas.push(text);
        console.log(frutas);

        let li = document.createElement('li');
        li.innerText = text;
        frutasDiv.appendChild(li);

        buscarInput.value = '';
    }
    else{
        alert("Invalid input :(");
    }
})