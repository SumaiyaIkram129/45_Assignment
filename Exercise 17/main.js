"use strict";
let guestlist = ["wajiha", "sidra", "malaika", "ammarah", "irsa", "ayesha"];
// print messege
console.log("unfortunately! the new dinner table won't arrive so we can invite only two guest.");
// remove guest from the list
while (guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry ${removedGuest}, we can't invite you.`);
    }
}
console.log(guestlist);
// print a messege to each of the two people still on your list, 
// letting them know they're still invited.
guestlist.forEach(guest => {
    console.log(`dear ${guest}, you are still invited for the dinner.`);
});
// remove last two names from the list
guestlist.splice(0, guestlist.length);
// print updated empty list
console.log("updated list of guest:", guestlist);
