"use strict";
//Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = [
    "Sana",
    "Tehreem",
    "Roshan",
];
// Loop for each to print invitation
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName}, You are invited to dinner please join us.`);
});
