//Math Operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log( 10 % 4); //gives remainder

console.log(10 + 3 - 5 * 10);
console.log((10 + 3 - 5) * 10);

let result = (10 + 3 - 5) * 10;
result = result + 10;
console.log(result);

result++; //result = result + 1;
result--; //result = result - 1;

result += 5; //result = result + 5;
result -=5; //result = result - 5;
result /=5; //result = result / 5;
result *=5; //result = result * 5;

console.log(result);

console.log("Shruthi" + " " + "Kamath"); //concatenate but other operation are not allowed on string


let userName = "Shruthi";
console.log(userName.length);
console.log(userName.toUpperCase());

let hobbies = ["sports", "cooking", "reading"];
console.log(hobbies.length);
