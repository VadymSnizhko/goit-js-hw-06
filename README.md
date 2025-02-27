Second Home Work

audit task 1: customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

audit task 2: const allUsers = [ { name: "Moore Hensley", friends: ["Sharron
Pace"] }, { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
{ name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi
Buckner"] }, { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] }, {
name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] }, { name:
"Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] }, { name:
"Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] } ];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); // [ // { // name:
"Sharlene Bush", // friends: ["Briana Decker", "Sharron Pace"] // }, // { //
name: "Sheree Anthony", // friends: ["Goldie Gentry", "Briana Decker"] // } // ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry")); // [ // { // name:
"Elma Head", // friends: ["Goldie Gentry", "Aisha Tran"] // }, // { // name:
"Sheree Anthony", // friends: ["Goldie Gentry", "Briana Decker"] // } // ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

audit task 3: console.log( sortByDescendingFriendCount([ { name: "Moore
Hensley", friends: ["Sharron Pace"], gender: "male" }, { name: "Sharlene Bush",
friends: ["Briana Decker", "Sharron Pace"], gender: "female" }, { name: "Ross
Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
gender: "male" }, { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"],
gender: "female" }, { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie
Strong"], gender: "male" }, { name: "Blackburn Dotson", friends: ["Jacklyn
Lucas", "Linda Chapman"], gender: "male" }, { name: "Sheree Anthony", friends:
["Goldie Gentry", "Briana Decker"], gender: "female" } ]) ); // [ // { // name:
"Ross Vazquez", // friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi
Buckner"], // gender: "male" // }, // { // name: "Sharlene Bush", // friends:
["Briana Decker", "Sharron Pace"], // gender: "female" // }, // { // name: "Elma
Head", // friends: ["Goldie Gentry", "Aisha Tran"], // gender: "female" // }, //
{ // name: "Carey Barr", // friends: ["Jordan Sampson", "Eddie Strong"], //
gender: "male" // }, // { // name: "Blackburn Dotson", // friends: ["Jacklyn
Lucas", "Linda Chapman"], // gender: "male" // }, // { // name: "Sheree
Anthony", // friends: ["Goldie Gentry", "Briana Decker"], // gender: "female" //
}, // { // name: "Moore Hensley", // friends: ["Sharron Pace"], // gender:
"male" // } // ]

