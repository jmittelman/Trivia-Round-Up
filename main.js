console.log("Check me out!");

// ----------------Data

// create array with 10 questions + 1 correct answer
// and 2 wrong answers for each

var trivia = [
  {
    name: "question1",
    question: "Am I Right?",
    correctAnswer: "correctomundo!",
    wrongAnswer1: "not really",
    wrongAnswer2: "fat chance"
  },
  {
    name: "question2",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question3",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question4",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question4",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question5",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question6",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question7",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question8",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question9",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  },
  {
    name: "question10",
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
  }
];

// --------------functinality notes

// show modal box with "Ready?/Get Started" button

// use event listener for click on button

// remove modal and then provide question 1 by adding question text
// to the question box and answer text to the answer boxes

// use event listener for click on selection button

// then show result and "next" button  in result box and update score
// score box

// clear question box and answer boxes

// then provide question 2

// continue for total 10 times

// show modal box with final score and ask to play again

// --------------Get started / load first question

const getStarted = document.querySelector(".readyStart");
getStarted.addEventListener("click", function(evt) {
  evt.preventDefault();
  $("#myModal").modal("hide");
  let newQuestion = document.createElement("div");
  newQuestion.className = "questionContent card-body";
  newQuestion.innerHTML = trivia[0].question;
  document.querySelector(".ask").appendChild(newQuestion);
  let newCorrectAnswer = document.createElement("div");
  newCorrectAnswer.className = "answer1Here card-body";
  newCorrectAnswer.innerHTML = trivia[0].correctAnswer;
  referenceNode = document.querySelector(".select1");
  document
    .querySelector(".choice1")
    .insertBefore(newCorrectAnswer, referenceNode);

  let newWrongAnswer1 = document.createElement("div");
  newWrongAnswer1.className = "answer2Here card-body";
  newWrongAnswer1.innerHTML = trivia[0].wrongAnswer1;
  referenceNode2 = document.querySelector(".select2");
  document
    .querySelector(".choice2")
    .insertBefore(newWrongAnswer1, referenceNode2);

  let newWrongAnswer2 = document.createElement("div");
  newWrongAnswer2.className = "answer3Here card-body";
  newWrongAnswer2.innerHTML = trivia[0].wrongAnswer2;
  referenceNode3 = document.querySelector(".select3");
  document
    .querySelector(".choice3")
    .insertBefore(newWrongAnswer2, referenceNode3);
});
// ------------------------select an answer

const reveal = document.querySelector(".select1");
reveal.addEventListener("click", function(evt) {
  evt.preventDefault;
  let correctChoice = document.createElement("div");
  correctChoice.className = "prompt card";
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
