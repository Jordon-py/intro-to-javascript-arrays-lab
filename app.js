
let fruits = ["apple", "orange", "grape", "strawberry"];

console.log(fruits[0]); // "mango"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "pineapple"


fruits.push("papaya");    // fruits is now ["mango","banana","pineapple","papaya"]
fruits.unshift("kiwi");   // fruits is now ["kiwi","mango","banana","pineapple","papaya"]

// Declare a basic array of fruits
console.log("All fruits:", fruits);


console.log("First fruit:", fruits[0]);

fruits.push("strawberry");
console.log("After adding strawberry:", fruits);



for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit #", i, ":", fruits[i]);
}

