// ----------------Data

// create array with 10 questions + 1 correct answer
// and 2 wrong answers for each

var trivia = [
  {
    question: "Am I Right?",
    answers: ["yessiree!", "not really", "nope"],
    correctAnswer: "yessiree!"
  },
  {
    question: "What about now?",
    answers: ["not quite", "no way", "yep!"],
    correctAnswer: "yep"
  },
  {
    question: "Am I handsome?",
    answers: ["nope", "very much so", "sorry"],
    correctAnswer: "very much so"
  },
  {
    question: "what color?",
    answers: ["blue", "red", "green"],
    correctAnswer: "red"
  },
  {
    question: "what day?",
    answers: ["Sunday", "Monday", "Thursday"],
    correctAnswer: "Thursday"
  },
  {
    question: "what year",
    answers: ["2019", "2025", "2005"],
    correctAnswer: "2019"
  },
  {
    question: "wolf?",
    answers: ["maybe", "definitely", "hardly"],
    correctAnswer: "definitely"
  },
  {
    question: "tell a story?",
    answers: ["please, no", "boring...", "go ahead"],
    correctAnswer: "go ahead"
  },
  {
    question: "what's for lunch?",
    answers: ["sandwich", "pizza", "nothing"],
    correctAnswer: "sandwich"
  },
  {
    question: "how many times?",
    answers: ["3", "6", "9"],
    correctAnswer: "9"
  },
  {
    question: "okay?",
    answers: ["not okay", "yeah, right", "okay"],
    correctAnswer: "okay"
  }
];

// --------------functinality notes

// show modal box with "Ready?/Get Started" button

// use event listener for click on button

// remove modal and then provide question 1 by adding question text
// to the question box and answer text to the answer boxes

// assign answers to the three containers
// when they press select button compare answer in that box to correct answer

// if answer is correct answer return correct answer prompt
// if answer is wrong answer return wrong answer prompt

// if correct answer increment the score

// use event listener for click on Try Another button

// clear question box and answer boxes

// then provide question 2

// continue for total 10 times

// show modal box with final score and ask to play again

// --------------Get started / load first question

var score = 0;
const scoreStart = document.querySelector(".score");
scoreStart.innerHTML = score;

const getStarted = document.querySelector(".readyStart");
getStarted.addEventListener("click", function(evt) {
  evt.preventDefault();
  $("#myModal").modal("hide");

  let newQuestion = document.createElement("div");
  newQuestion.className = "questionContent card-body box";
  newQuestion.innerHTML = trivia[0].question;
  document.querySelector(".ask").appendChild(newQuestion);

  let newAnswer1 = document.createElement("div");
  newAnswer1.className = "answer1Here card-body answer-card box";
  newAnswer1.innerHTML = trivia[0].correctAnswer;
  referenceNode = document.querySelector(".select1");
  document.querySelector(".choice1").insertBefore(newAnswer1, referenceNode);

  let newAnswer2 = document.createElement("div");
  newAnswer2.className = "answer2Here card-body answer-card box";
  newAnswer2.innerHTML = trivia[0].answers[1];
  referenceNode2 = document.querySelector(".select2");
  document.querySelector(".choice2").insertBefore(newAnswer2, referenceNode2);

  let newAnswer3 = document.createElement("div");
  newAnswer3.className = "answer3Here card-body answer-card box";
  newAnswer3.innerHTML = trivia[0].answers[2];
  referenceNode3 = document.querySelector(".select3");
  document.querySelector(".choice3").insertBefore(newAnswer3, referenceNode3);
});
// ------------------------select an answer

// click on a select button
// if button is linked to correct answer
// then display "correct" Message
// else if button is linked to incorrect answer
// then display "incorrect" message

let thisAnswer = "";

const answers = document.querySelector(".answers");
answers.addEventListener("click", e => {
  e.preventDefault();
  const clickedBox = e.target;
  const targetParent = clickedBox.parentElement;
  thisAnswer = targetParent.querySelector(".answer-card").innerHTML;
  checkAnswer();
});

function checkAnswer() {
  if (thisAnswer === trivia[0].correctAnswer) {
    function increaseScore() {
      scoreStart.innerHTML = score + 1;
    }
    increaseScore();

    var html = [
      '<div class="card-body">Correct. Great job, pardner!</div>',
      '<button class="next btn btn-info">Try Another</button>'
    ].join("");

    let madeChoice = document.createElement("div");
    madeChoice.className = "prompt card box";
    madeChoice.innerHTML = html;
    document.querySelector(".result").appendChild(madeChoice);
  } else {
    var html2 = [
      '<div class="card-body">Sorry. That is wrong pardner!</div>',
      '<button class="next btn btn-info">Try Another</button>'
    ].join("");

    let madeChoice2 = document.createElement("div");
    madeChoice2.className = "prompt card box";
    madeChoice2.innerHTML = html2;
    document.querySelector(".result").appendChild(madeChoice2);
  }
}

// // // -------------------------------click on try another button

// // var wipeTheBoard = function() {
// //   var clearOut = doucment.querySelectorAll(".box");
// //   if (clearOut.length > 0) {
// //     for (i = 0; i < clearOut.length; i++) {
// //       let a = document.querySelector(".question");
// //       a.removeChild(clearOut[i]);
// //       let b = document.querySelectorAll(".choice");
// //       b.removeChild(clearOut[i]);
// //       let c = document.querySelector(".result");
// //       b.removeChild(clearOut[i]);
// //     }
// //   }
// // };

// // const next = document.querySelector(".next");
// // next.addEventListener("click", function(evt) {
// //   evt.preventDefault;
// //   wipeTheBoard();
// // });

// // // how does it know what question it's on?
