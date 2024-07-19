"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Cheese", "Egg");
makeSandwich("Bread", "Butter", "Tomato", "Chicken", "Cheese", "Egg", "Mayo");
