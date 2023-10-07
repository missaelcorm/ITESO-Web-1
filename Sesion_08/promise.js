function traerTortillas() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = [1,2,3,4,5];
            //resolve(data);
            reject({mensaje: "Estaba cerrado"});
        }, 1000);
    });
}

const promise = traerTortillas();

promise.then(function(response) {
    console.log("Llegaron las tortillas", response);
}).catch(function(error) {
    console.log("Something went wrong:", error);
});