class Person {
    name = '';
    lastName = '';
    heigth = 0;
    years = 0;
    peso = 0;

    constructor(name){
        this.name = name;
    }

    talk(message) {
        console.log(message);
    }

    walk(){}
}

const person = new Person("Missael");

console.log(person);