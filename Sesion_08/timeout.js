function sum(a, b) {
    return a + b;
}

const sumTimeout = setTimeout(function(){
    const r = sum(4,22);
    console.log("Result:", r);
}, 1000);
console.log("Continue");

clearTimeout(sumTimeout);

const sumInterval = setInterval(function(){
    const r = sum(4,22);
    console.log("Result:", r);
}, 1000);
console.log("Continue");