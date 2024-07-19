"use strict";
let guestlist = ["wajiha", "umme ammarah", "irsa"];
// print the name who is note invited for dinner
let unableattend = guestlist.splice(0, 1)[0];
console.log(`${unableattend} not invited for dinner`);
console.log(guestlist);
// push
guestlist.push("sidra");
console.log(guestlist);
// print a messege
guestlist.forEach(guest => {
    console.log(`dear ${guest}, you are invited to dinner.`);
});
