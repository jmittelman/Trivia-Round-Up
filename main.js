// ----------------Data

// create array with 10 questions + 1 correct answer
// and 2 wrong answers for each

var score = 0;

var trivia = [
  {
    question: "Am I Right?",
    answers: ["yessiree!", "not really", "fat chance"],
    correctAnswer: "yessiree!"
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
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

// const reveal = document.querySelector(".select1");
// reveal.addEventListener("click", function(evt) {
//   evt.preventDefault;
//   let correctChoice = document.createElement("div");
//   correctChoice.className = "prompt card";
//   document.querySelector(".result").appendChild(correctChoice);
//   let correctChoice2 = document.createElement("div");
//   correctChoice2.className = "card-body";
//   document.querySelector(".prompt").appendChild(correctChoice2);
//   correctChoice2.innerHTML = "Correct. Great job, pardner!";
//   let correctChoice3 = document.createElement("button");
//   correctChoice3.className = "next btn btn-info";
//   document.querySelector(".prompt").appendChild(correctChoice3);
//   correctChoice3.innerHTML = "Try Another";
// });

//  click on select button
// if button is linked to present correct answer
// then display correct Message
// else if button is linked to incorrect answer
// then display incorrect message

const answers = document.querySelector(".answers");
answers.addEventListener("click", e => {
  e.preventDefault();
  const clickedBox = e.target;
  //   console.log(clickedBox.innerHTML);
  const targetParent = clickedBox.parentElement;
  //   return targetParent.querySelector(".answer-card").innerHTML;
  let thisAnswer = targetParent.querySelector(".answer-card").innerHTML;
});

if (thisAnswer === trivia[0].correctAnswer) {
  score++;
  const reveal = document.querySelector(".select1");
  reveal.addEventListener("click", function(evt) {
    evt.preventDefault;
    let correctChoice = document.createElement("div");
    correctChoice.className = "prompt card box";
    document.querySelector(".result").appendChild(correctChoice);
    let correctChoice2 = document.createElement("div");
    correctChoice2.className = "card-body";
    document.querySelector(".prompt").appendChild(correctChoice2);
    correctChoice2.innerHTML = "Correct. Great job, pardner!";
    let correctChoice3 = document.createElement("button");
    correctChoice3.className = "next btn btn-info";
    document.querySelector(".prompt").appendChild(correctChoice3);
    correctChoice3.innerHTML = "Try Another";
  });
} else {
  const reveal2 = document.querySelector(".select1");
  reveal2.addEventListener("click", function(evt) {
    evt.preventDefault;
    let madeChoice = document.createElement("div");
    madeChoice.className = "prompt card box";
    document.querySelector(".result").appendChild(madeChoice);
    let madeChoice2 = document.createElement("div");
    madeChoice2.className = "card-body";
    document.querySelector(".prompt").appendChild(madeChoice2);
    madeChoice2.innerHTML = "Sorry. That's wrong, pardner!";
    let madeChoice3 = document.createElement("button");
    madeChoice3.className = "next btn btn-info";
    document.querySelector(".prompt").appendChild(madeChoice3);
    madeChoice3.innerHTML = "Try Another";
  });
}

// -------------------------------click on try another button

var wipeTheBoard = function() {
  var clearOut = doucment.querySelectorAll(".box");
  if (clearOut.length > 0) {
    for (i = 0; i < clearOut.length; i++) {
      let a = document.querySelector(".question");
      a.removeChild(clearOut[i]);
      let b = document.querySelectorAll(".choice");
      b.removeChild(clearOut[i]);
      let c = document.querySelector(".result");
      b.removeChild(clearOut[i]);
    }
  }
};

const next = document.querySelector(".next");
next.addEventListener("click", function(evt) {
  evt.preventDefault;
  wipeTheBoard();
});
