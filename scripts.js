// const heading = document.getElementById("heading");
// console.log(heading);

// varaible assigned value is a string
// const myName = "Chris";

// varaible assigned value is a number
// let myAge = 40;

// const nameAge = "Hello my name is " + myName + " and I am " + myAge + " years old";

// console.log(nameAge);

// varaible assigned value is a boolean
// let isAlive = true;

// varaible assigned value is a array
// const myPets = [{}, {}, {}];

// varaible assigned value is a object
// const locations = {
//   heading: "",
//   location: "",
//   highlyRated: true,
//   price: 48,
// };

// let x = 5 + 5;
// let y = 6 - 3;
// let a = 2 * 2;
// let b = 5 / 5;

// let myHouseNum = myName + " " + "is showing us some javascript";
// console.log(myName);

// let x = 5;
// const y = "5";

// let number = x + y;
// console.log(typeof number);

// const demo = document.getElementById("demo");
// console.log(demo);
// demo.innerHTML = message;

// document.getElementById("demo").innerHTML = message;

// for(initialization; condition; increment){
//  statements
// }

// string - sentence "tim"
// number - 1
// boolean - true or false
// array - ["lou", "victor", "Jeremy"]
// object - {name: "lou", age: 21,}

let myFavPets = ["Dog", "Cat", "GoldFish"];

// console.log(myFavPets[0]);
// console.log(myFavPets[1]);
// console.log(myFavPets[2]);

for (let i = 0; i < myFavPets.length; i++) {
  console.log("I love my pet " + myFavPets[i]);
}

// while(condition){
//  statement
//}

let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
  console.log(n);
  console.log(x);
}

let numberOfClick = 0;

while (numberOfClicks < 5) {
  numberOfClick++;
}