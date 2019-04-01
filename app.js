//  Data types and variavles\
var myName = "Roderick";
var myAge = 21;
let mySurname = "King";
const DATABASE_NAME = 'imdb';
console.log(myName + " " + mySurname);
var pinNumber = 1234;

if ( pinNumber === 1234){
 console.log("Correct pin number");
} else {
  console.log("incorrect !");
}

//  loops
var animals = ['cat', ' donkey', ' goose'];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


//   functions
var printName = function(){
  console.log("Roderick");
}

printName();
printName();
printName();
printName();


// Arrays

var pubNames = ['Cloisters' , '4042' , ' The Red Lion'];
console.log(pubNames);
// Objects

var person = {
  name: "Roderick",
  pinNumber: 1234,
  tel: 999999
}

console.log(person);
