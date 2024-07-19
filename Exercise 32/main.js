"use strict";
let current_users = ["Wajiha", "sidra", "Irsa", "malaika", "Rabia"];
let new_users = ["Ayesha", "Eman", "Sidra", "Ammarah", "Malaika"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
