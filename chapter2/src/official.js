'use strict';

// let myPrompt = prompt("What's the \"official\" name of JavaScript?", 'none');

// let answer = myPrompt == 'ECMAScript' ? 'Right!': 'You don\'t know? "ECMAScript"!';

// alert(answer);


// let userNumber = +prompt("Give me the number");
// let answer = userNumber > 0 ? 1 : userNumber < 0 ? -1 : 0;

// alert(answer);

// let result = (a + b < 4) ? 'below': 'over';

// let message = (login == 'Employye') ? 'Hello': (login == 'Director') ? 'Greetings': (login == '') ? 'No Login' : ' ';


// let promptName = prompt('Who\'s there?', '');

// if(promptName == 'Admin') {
//     let password = prompt('Password?', ''); 
//     if(password == 'TheMaster') {
//         alert('Welcome!');
//     } else {
//         alert('Wrong Password!');
//     }
// } else {
//     alert('I don\t know you!');
// }

// for(let i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// let i = 0;
// while(i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


// do {
//     let correctNumb = +prompt('Give me the number greater then 100!', '');
// } while(correctNumb <= 100);

// let correctNumb = +prompt('Give me the number greater then 100!', '');

// while(correctNumb <= 100) {
//     let correctNumb = +prompt('Give me the number greater then 100!', '');
//     if(correctNumb > 100) {
//         break;
//     }
// }


// function checkAge(age) {
//     return (age > 18 ?) ? true: confirm('Did parents allow you?');
// } 


// function min(a, b) {
//     return (a < b) ? a:b;
// }

// function pow(a, count) {
//     for(let i = 1; i <= count; i++) {
//         a*=count;
//     }
//     return a;
// }

let myArrow = (a, b) => {a * a};

let ask = (question, yes, no) => {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask('Do you agree?', () => alert('You agreeed!!'), ()=> alert('You dont agreed!'));