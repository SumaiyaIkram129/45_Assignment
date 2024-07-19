let placeToVisit: string [] = ["paris", "italy", "london", "china", "australia"];
// print in original order
console.log("original order:", placeToVisit);

// print array in alphabetical order
console.log("alphabetical order:", placeToVisit.slice().sort());

// array is still in its original order
console.log("original order after sorting:", placeToVisit);

// print array in reverse alphabetical order without changing the order of the original list
console.log("reverse alphabetical order:", placeToVisit.slice().sort().reverse());

// array is still in its original order
console.log("original order after reverse sorting:", placeToVisit);

// reverse the order of your list
placeToVisit.reverse();
console.log("reverse order:", placeToVisit);

// reverse the order of your list again
placeToVisit.reverse();
console.log("back to original order:", placeToVisit);

// sort your array to it's stored in alphabetical order
console.log("sorted in alphabetical order:", placeToVisit.slice().sort());

// sort to change array so it's stored in reverse alphabetical order
console.log("stored in reverse alphabetical order:", placeToVisit.slice().sort().reverse());
