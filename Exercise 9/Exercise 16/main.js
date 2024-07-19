"use strict";
let guestlist = ["irsa", "sidra", "ammarah"];
console.log("great news we found a bigger table");
// unshift()
guestlist.unshift("wajiha");
console.log(guestlist);
// splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "malaika");
console.log(guestlist);
// push
guestlist.push("ayesha");
console.log(guestlist);
guestlist.forEach(guest => {
    console.log(`dear ${guest}, yoy all are invited to dinner.`);
});
