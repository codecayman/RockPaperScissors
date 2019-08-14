var userChoice = prompt("Do you choose rock, paper or scissors?");
userChoice = userChoice.toLowerCase();
if (userChoice == 'rock') {
    document.write('You picked ' + userChoice + '<br />');
} else if (userChoice == 'paper') {
    document.write('You picked ' + userChoice + '<br />');
} else if (userChoice == 'scissors') {
    document.write('You picked ' + userChoice + '<br />');
} else {
    document.write('You did not pick anything' + '<br />');
}
let computerPick = Math.random();
let computerChoice = '';
if (computerPick < 0.34) {
    computerChoice = 'rock';
} else if (computerPick <= 0.67) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}

document.write('computer choice: ' + computerChoice + '<br />'  );

let compare = function(choice1, choice2) {
    if (choice1 == choice2) {
        return 'It is a tie';
    }
    if (choice1 == 'rock'){
        if (choice2 == 'paper') {
            return 'The computer won';
        } else {
            return 'You WON!!!';
        }
    }
    if (choice1 == 'paper'){
        if (choice2 == 'scissors') {
            return 'The computer won';
        } else {
            return 'You WON!!!';
        }
    }
    if (choice1 == 'scissors'){
        if (choice2 == 'rock') {
            return 'The computer won';
        } else {
            return 'You WON!!!';
        }
    }
};

let winner = compare(userChoice, computerChoice);

document.write('The winner is: ' + winner);
