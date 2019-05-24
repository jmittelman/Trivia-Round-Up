// ----------------Data

// create array with 10 questions + 1 correct answer
// and 2 wrong answers for each

var trivia = [
  {
    question:
      "In the rodeo world, what bull is considered one of the rankest of all time?",
    answers: ["Bodacious", "Bully", "Periwinkle"],
    correctAnswer: "Bodacious"
  },
  {
    question:
      "What type of horse is usually used in both bareback and saddle bronc riding?",
    answers: ["Gelding", "Mare", "Stallion"],
    correctAnswer: "Gelding"
  },
  {
    question:
      "In barrel racing, what is the shape that a barrel racer takes known as?",
    answers: ["Figure Eight", "Double Triangle", "Clover Leaf"],
    correctAnswer: "Clover Leaf"
  },
  {
    question:
      "What word refers to the partner of the “bull dogger” in Steer Wrestling?",
    answers: ["Hazer", "Flanker", "Skipper"],
    correctAnswer: "Hazer"
  },
  {
    question:
      "The “well” is a term most commonly used to identify a riding position in what event?",
    answers: ["Bull Riding", "Calf Roping", "Bareback Riding"],
    correctAnswer: "Bull Riding"
  },
  {
    question:
      "What penalty is assigned if a barrel racer knocks down a barrel?",
    answers: ["10 Points", "5 Seconds", "Disqualification"],
    correctAnswer: "5 Seconds"
  },
  {
    question: "How many legs does a calf roper need to tie together?",
    answers: ["2", "3", "4"],
    correctAnswer: "3"
  },
  {
    question:
      "What two PBR bulls have the dubious distinction of having caused fatalities?",
    answers: [
      "Skat Cat & Strawberry Wine",
      "Playmate & Hammer Time",
      "Red Wolf & Promiseland"
    ],
    correctAnswer: "Red Wolf & Promiseland"
  },
  {
    question:
      "In Calf Roping, riders have a rope woven within their belts. What is it called?",
    answers: ["Jerk Line", "Tie Wrap", "Piggin' String"],
    correctAnswer: "Piggin' String"
  },
  {
    question: "Besides providing comic relief, what does the rodeo clown do?",
    answers: ["Protect Rodeo Cowboys", "Judge", "Keep Time"],
    correctAnswer: "Protect Rodeo Cowboys"
  }
];

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

  // let xAnswer1 = document.createElement("div");
  // xAnswer1.className = "pick pick1";
  // document.querySelector(".answers").appendChild(xAnswer1);
  // let xAnswer2 = document.createElement("div");
  // xAnswer2.className = "choice choice1 card";
  // document.querySelector(".pick1").appendChild(xAnswer2);
  // let xAnswer3 = document.createElement("div");
  // xAnswer3.className = "answer1Here card-body answer-card box";
  // xAnswer3.innerHTML = trivia[0].correctAnswer;
  // referenceNode = document.querySelector(".select1");
  // document.querySelector(".choice1").insertBefore(xAnswer3, referenceNode);

  let newAnswer1 = document.createElement("div");
  newAnswer1.className = "answer1Here card-body answer-card box";
  newAnswer1.innerHTML = trivia[0].correctAnswer;
  referenceNode = document.querySelector(".select1");
  document.querySelector(".choice1").insertBefore(newAnswer1, referenceNode);

  // let yAnswer1 = document.createElement("div");
  // yAnswer1.className = "pick pick2";
  // document.querySelector(".answers").appendChild(yAnswer1);
  // let yAnswer2 = document.createElement("div");
  // yAnswer2.className = "choice choice2 card";
  // document.querySelector(".pick2").appendChild(yAnswer2);
  // let yAnswer3 = document.createElement("div");
  // yAnswer3.className = "answer2Here card-body answer-card box";
  // yAnswer3.innerHTML = trivia[0].answers[1];
  // referenceNode2 = document.querySelector(".select2");
  // document.querySelector(".choice2").insertBefore(yAnswer3, referenceNode2);

  let newAnswer2 = document.createElement("div");
  newAnswer2.className = "answer2Here card-body answer-card box";
  newAnswer2.innerHTML = trivia[0].answers[1];
  referenceNode2 = document.querySelector(".select2");
  document.querySelector(".choice2").insertBefore(newAnswer2, referenceNode2);

  // let zAnswer1 = document.createElement("div");
  // zAnswer1.className = "pick pick3";
  // document.querySelector(".answers").appendChild(zAnswer1);
  // let zAnswer2 = document.createElement("div");
  // zAnswer2.className = "choice choice3 card";
  // document.querySelector(".pick3").appendChild(zAnswer2);
  // let zAnswer3 = document.createElement("div");
  // zAnswer3.className = "answer3Here card-body answer-card box";
  // zAnswer3.innerHTML = trivia[0].answers[2];
  // referenceNode3 = document.querySelector(".select3");
  // document.querySelector(".choice3").insertBefore(zAnswer3, referenceNode3);

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
    const tryAnother = document.querySelector(".next");
    tryAnother.addEventListener("click", function(evt) {
      evt.preventDefault;
      wipeTheBoard();
    });
  } else {
    var html2 = [
      `<div class="card-body">Sorry. That is wrong pardner!</br>The correct answer is ${
        trivia[0].correctAnswer
      }</div>`,
      `<button class="next btn btn-info">Try Another</button>`
    ].join("");

    let madeChoice2 = document.createElement("div");
    madeChoice2.className = "prompt card box";
    madeChoice2.innerHTML = html2;
    document.querySelector(".result").appendChild(madeChoice2);
    const tryAnother = document.querySelector(".next");
    tryAnother.addEventListener("click", function(evt) {
      evt.preventDefault;
      wipeTheBoard();
    });
  }
}

// // // -------------click on try another button/ wipe board

var wipeTheBoard = function() {
  var clearOut = document.querySelectorAll(".box");
  if (clearOut.length > 0) {
    for (i = 0; i < clearOut.length; i++) {
      let a = clearOut[i].parentNode;
      a.removeChild(clearOut[i]);
    }
  }
};

// -----------------------bring in new question and answers

// -----------------------game ends
