const userAge =(prompt("Enter your age:"));


if (userAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    const yearsToVote = 18 - userAge;
    console.log(`You are not yet eligible to vote. You need to wait for ${yearsToVote} more years.`);
}