console.log("Check me out!");

// ----------------Data

// create array with 10 questions + 1 correct answer
// and 2 wrong answers for each

var trivia = [
  {
    name: "question1",
    question: "What's up?",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: ""
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
  let newQuestion = document.createElement("div");
  newQuestion.className = "questionContent card-body";
  newQuestion.innerHTML = trivia[0].question;
  document.querySelector(".ask").appendChild(newQuestion);
  $("#myModal").modal("hide");
});
