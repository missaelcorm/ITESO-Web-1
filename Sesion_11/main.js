$(document).ready(function(){
    //const form = document.getElementById("form");
    //const buscarInput = document.querySelector("form > input[name=buscar]");
    //buscarInput.value = buscarInput.value.trim();
    //const frutasDiv = document.getElementById("frutas");

    const buscarInput = $('form input[name="buscar"]')[0];
    const form = $('#form')[0];
    const frutasOl = $('#frutasList')[0];

    const frutas = [];

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const text = buscarInput.value.toLowerCase().trim();

        if(text != ""){
            if(frutas.indexOf(text) === -1) {
                alert("Sent");

                frutas.push(text);
                console.log(frutas);

                let li = document.createElement('li');
                li.innerText = text;
                frutasOl.appendChild(li);

                buscarInput.value = '';
            }
            else{
                alert("Fruit: \"" + text + "\" already exists");
            }
        }
        else{
            alert("Invalid input :(");
        }
    })
});
