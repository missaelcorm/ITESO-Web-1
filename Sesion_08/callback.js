function traerTortillas(cb) {
    setTimeout(function () {
        const torillas  = [1,2,3,4,5];
        cb(torillas);
    }, 1000);
}

function traerRefresco(cb) {
    setTimeout(function () {
        const refresco = "Coca Cola";
        cb(refresco);
    }, 1000)
}

traerTortillas(function(data) {
    console.log("Llegaron las tortillas", data);
    if (data) {
        traerRefresco(function(data) {
            console.log("Llego el refresco");
        })
    }
});