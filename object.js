// Player - This is bad

// const player = {
//     name: "?", // could also put null
//     hp: 100,
//     mp: 0,
//     items: []
// };

// const hanSolo = player;
// hanSolo.name = "Han Solo";
// hanSolo.hp = 80;
// hanSolo.mp = 20;
// hanSolo.items = ["blaster", "falcon"];

// const darthVader = player;

// console.log(hanSolo);
// console.log(darthVader);

// This doesn't work because player is an object & objects in JS are just references. We only have one type of this thing that exists at a time. So when we change the name of hanSolo, we're changing the name of player. We're not creating a new object, we're just changing the name of the object that already exists. So when we log darthVader, it's the same as logging hanSolo. They're both the same object.

// Player ex. 2 - This is better, but still has issues

// const createPlayer = (name, hp, mp, items) => {
//     return {
//         name,

//         hp,

//         mp,

//         items,
//     };
// };

// const hanSolo = createPlayer("Han Solo", 100, 10, ["blaster"]);
// console.log(hanSolo);

// const darthVader = createPlayer("Darth Vader", 200, 50, ["saber"]);
// console.log(darthVader);

// We are calling our createPlayer function which will return our createPlayer template with all of the values assigned accordingly. So we can pass in the values we want to assign to each player. Each of these players will have their own state.

// What are the issues with this? 

// Player ex. 3 - This is the correct way to do OOP in JS

// class Player {
//     age = 20; // you can setup default values in the class that will be shared by all instances of the class.
//     constructor(name, hp, mp, items) {
//         this.name = name;
//         this.hp = hp;
//         this.mp = mp;
//         this.items = items;
//         // this.age = 20; 
//     }

//     speak(phrase) {
//         console.log(`${this.name} says: ${phrase}`);
//     }
// }

// // We created a template to make a player here ^^^ with this constructor & we can create as many players as we want, each with their own values.

// const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
// hanSolo.speak("Never tell me the odds!");
// console.log(hanSolo);
// console.log(Object.getOwnPropertyNames(hanSolo));
// console.log(Object.getOwnPropertyNames(hanSolo.__proto__)); // 'constructor' & now 'speak' are in the prototype

// You can do the same thing using the function syntax, as well, as shown below.
    
// function AnotherPlayer(name, hp, mp, items) {
//         this.name = name;
//         this.hp = hp;
//         this.mp = mp;
//         this.items = items;
// }

// AnotherPlayer.prototype.speak = function(phrase) {
//         console.log(`${this.name} says: ${phrase}`);
// };

// const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["saber"]);
// console.log(darthVader);
// darthVader.speak("I am your father.");
// console.log(Object.getOwnPropertyNames(darthVader));
// console.log(Object.getOwnPropertyNames(darthVader.__proto__));