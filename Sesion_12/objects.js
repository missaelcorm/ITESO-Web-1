const person = {
    name: "Missael",
    lastName: "Cortes",
    email: "email@hello.com",
    sayHello: () => {
        console.log("Hi I'm " + this.name);
    }
}

console.log(person.sayHello());

const keys = Object.keys(person);
keys.forEach((key) => {
    console.log(person[key]);
});

let p1 = {name: "Juan"};
let p2 = Object.assign({}, p1);

p2.name = "Pedro";

console.log(p1);
console.log(p2);

const {...rest} = person;
// Left to extract '{...object}'

console.log(rest);

const edited = {editado: true, ...person};
// Right to extract '{...object}'

console.log(edited);