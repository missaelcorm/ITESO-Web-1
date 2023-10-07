const string = "Hello World";
const words = string.split(" ");

console.log(words);
console.log(words.length);

const file = "file.exe"
const ext = file.split(".").pop();

console.log(ext);

const name = "Missael";
const lastName = "Cortes";

const fullName = `${name} ${lastName}`
console.log(fullName);

const template = `
<h1>Hello World</h1>
<p>lorem</p>
`;

console.log(template);