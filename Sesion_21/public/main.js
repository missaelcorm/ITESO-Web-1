console.log("Hello from main.js");

const url = "/albums";

fetch(url).then(response => response.json())
.then(albums => {
    console.log(albums);
});