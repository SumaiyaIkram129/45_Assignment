let guestlist: string[] = ["umme ammarah", "irsa", "sidra"];
console.log("great news! we found a bigger table");

// unshift()
guestlist.unshift("wajiha");

// splice()
guestlist.splice(Math.floor(guestlist.length/2),0, "Malaika");
console.log(guestlist);

// push
guestlist.push("Asma");

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to dinner`);
    
})
