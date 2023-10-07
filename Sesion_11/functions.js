console.log(this);

function sum(a, b) {
    return a+b;
}

console.log(sum(2,4));

class Person{
    name = ''

    constructor(name){
        this.name = name;
        console.log(this);
    }

    introduce(){
        setTimeout(function(){
            console.log("Hello I'm " + this.name);
        }.bind(this), 100);
    }

    introduceTwo(){
        setTimeout(() => {
            console.log("Hello I'm " + this.name);
        }, 1000);
    }
}

const me = new Person("Missael");
const me2 = new Person("Roberto");
me.introduce();
me.introduceTwo();