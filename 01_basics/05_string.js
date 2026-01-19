const name = "pawan"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pawan-tech-world');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-9, 5)
console.log(anotherString);

const newString2 = "   pawan   "
console.log(newString2);
console.log(newString2.trim());

const url = "https://pawan.com/pawan%20patil"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));














