var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name? ");
console.log("Welcome " + userName + " to 'HOW WELL DO YOU KNOW Nikhil'!");
var score = 0;
//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Shabash, correct answer!!!");
    score++;
    console.log("Your current score is : " + score);
  } else {
    console.log("eh, wrong answer:( ");
    console.log("Your current score is : " + score);
  }
}

// array of objects
var questions = [
  {
    question: "Who is my hero ? ",
    answer: "No one",
  },
  {
    question: "If I could live anywhere, where would it be? ",
    answer: "Canada",
  },
  {
    question: "What makes me laugh the most? ",
    answer: "Jimmy Carr",
  },
  {
    question: "Where do you see yourself in 5 years? ",
    answer: "Canada",
  },
  {
    question: "What's my favourite fast food chain? ",
    answer: " Burger king",
  },
  {
    question: "Am i a clean or messy person? ",
    answer: "Messy",
  },
  {
    question: "What kitchen appliance do I use everyday? ",
    answer: "Mixer",
  },
  {
    question: "Where would you find me everyday? ",
    answer: "Gym",
  },
  {
    question: "What's my relationship status? ",
    answer: "Single",
  },
  {
    question: "Do I love or hate rollercoasters? ",
    answer: "Hate",
  },
  {
    question: "Do I collect anything? ",
    answer: "Yes",
  },
];

// loop

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Yayyyy, you scored: " + score);
