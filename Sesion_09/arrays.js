let data = [];

data.push(1);
data.push(3);
data.push(5);
data.push(7);
data.push(11);
data.push(12);
data.push(56);

console.log(data);
console.log(data.length);

const newData = data.map(function(n) {
    //console.log(n);
    return n;
})

console.log(newData);

const evens = data.filter(function(n) {
    return n % 2 === 0;
})

console.log(evens);

const results = data.reduce(function(a, n){
    console.log(a, n);
})