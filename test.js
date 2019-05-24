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

// --------------------------  get started

var score = 0;
const scoreStart = document.querySelector(".score");
scoreStart.innerHTML = score;

var index = 0;

const getStarted = document.querySelector(".readyStart");
getStarted.addEventListener("click", function(evt) {
  evt.preventDefault();
  $("#myModal").modal("hide");
  layout(index);
});

function layout(num) {
  let newQuestion = document.createElement("div");
  newQuestion.className = "questionContent card-body box";
  newQuestion.innerHTML = trivia[num].question;
  document.querySelector(".ask").appendChild(newQuestion);

  let newAnswer1 = document.createElement("div");
  newAnswer1.className = "answer1Here card-body answer-card box";
  newAnswer1.innerHTML = trivia[num].answers[0];
  referenceNode = document.querySelector(".select1");
  document.querySelector(".choice1").insertBefore(newAnswer1, referenceNode);

  let newAnswer2 = document.createElement("div");
  newAnswer2.className = "answer2Here card-body answer-card box";
  newAnswer2.innerHTML = trivia[num].answers[1];
  referenceNode2 = document.querySelector(".select2");
  document.querySelector(".choice2").insertBefore(newAnswer2, referenceNode2);

  let newAnswer3 = document.createElement("div");
  newAnswer3.className = "answer3Here card-body answer-card box";
  newAnswer3.innerHTML = trivia[num].answers[2];
  referenceNode3 = document.querySelector(".select3");
  document.querySelector(".choice3").insertBefore(newAnswer3, referenceNode3);
}

// // const nextQuestion = document.querySelector(".next");
// // nextQuestion.addEventListener("click", function(evt) {
// //   evt.preventDefault;
// //   wipeTheBoard();
// //   layout(index++);
// });

function atEnd() {
  if (index === 9) {
    console.log("it's over");
    const resultsBox = document.querySelector(".next");
    // resultsBox.addEventListener("click", function(evt) {
    //   evt.preventDefault;
    //   wipeTheBoard();
    //   var html3 = [
    //     `<div class="card-body note">That rough stock could have bucked off even the most grizzled cowpunch</div>`,
    //     `<div class="card-body total">Your Score: ${score} out of 10</div>`,
    //     `<div class="poem">When the squealin', buckin' bronco</br>Has become an ol' plow nag</br>When the saddle and the poncho</br>
    //   Hand up in an ol' grain bag;</br>When his bits and spurs are rustin'</br>And the ropin' is all through,</br>
    //   And there's no more round-ups startin'</br>What's the puncher goin' to do?</div>`,
    //     `<button class="next btn btn-info">Try Again?</button>`
    //   ].join("");

    //   let finalChoice = document.createElement("div");
    //   finalChoice.className = "farewell card box";
    //   finalChoice.innerHTML = html3;
    //   document.querySelector(".final-message").appendChild(finalChoice);
  }
}

let thisAnswer = "";

function resultsPrompt(object) {
  const clickedBox = object.target;
  const targetParent = clickedBox.parentElement;
  thisAnswer = targetParent.querySelector(".answer-card").innerHTML;
  checkAnswer();
}

const answers = document.querySelector(".answers");
answers.addEventListener("click", e => {
  e.preventDefault();
  resultsPrompt(e);
});

function checkAnswer() {
  console.log(index);
  if (thisAnswer === trivia[index].correctAnswer) {
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
      atEnd();
      layout(index);
    });
  } else {
    var html2 = [
      `<div class="card-body">Sorry. That is wrong pardner!</br>The correct answer is ${
        trivia[index].correctAnswer
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
      atEnd();
      layout(index);
    });
  }
  index++;
}

function wipeTheBoard() {
  var clearOut = document.querySelectorAll(".box");
  if (clearOut.length > 0) {
    for (i = 0; i < clearOut.length; i++) {
      let a = clearOut[i].parentNode;
      a.removeChild(clearOut[i]);
    }
  }
}

// ---------------------end game

// const resultsBox = document.querySelector(".next");
// resultsBox.addEventListener("click", function(evt) {
//   evt.preventDefault;
//   wipeTheBoard();
//   var html3 = [
//     `<div class="card-body note">That rough stock could have bucked off even the most grizzled cowpunch</div>`,
//     `<div class="card-body total">Your Score: ${score} out of 10</div>`,
//     `<div class="poem">When the squealin', buckin' bronco</br>Has become an ol' plow nag</br>When the saddle and the poncho</br>
//   Hand up in an ol' grain bag;</br>When his bits and spurs are rustin'</br>And the ropin' is all through,</br>
//   And there's no more round-ups startin'</br>What's the puncher goin' to do?</div>`,
//     `<button class="next btn btn-info">Try Again?</button>`
//   ].join("");

//   let finalChoice = document.createElement("div");
//   finalChoice.className = "farewell card box";
//   finalChoice.innerHTML = html3;
//   document.querySelector(".final-message").appendChild(finalChoice);
