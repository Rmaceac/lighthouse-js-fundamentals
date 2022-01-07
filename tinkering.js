// this first function was an exercise from Compass
function multiply(a, b) {
return a * b;
}

const result = multiply(2, 4);

console.log(result);
// from this point down I am tinkering on my own, until otherwise stated.
const squareNum = num => num * num;

console.log("And for the next function... ");
console.log(squareNum(4));

if (result <= 8) {
console.log("The initial function in this file is equal to or less than eight (8)");
} else {
console.log("The initial function in this file is more than eight (8)");
}

let mexicoActivities = ["comemos tacos", "bebemos cervezas", "cuje juntos", "nadamos en la playa", "'code' en la computadora", "tomemos besos"]
console.log("Tu quieres saber por que viajamos a Mexico?")
console.log(`My array will list some of the reasons. Here are ${mexicoActivities.length} to start:`)
console.log(mexicoActivities)

//Practicing switch statements

switch (option) {
case 1:
console.log("You selected option 1.");
break;
case 2:
console.log("You have selected option 2.");
break;
case "option 3":
console.log("You have selected option 3.")
default:
console.log("Thank you for choosing an option.")
}

//Compass has me, once again, going over conditional statements.

