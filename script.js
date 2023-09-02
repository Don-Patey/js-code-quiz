// list of questions and answers

var questions = [
  {
    prompt: "Commonly used data types do NOT include:",
    options: ["<alerts>", "<booleans>", "<string>", "<numbers>"],
    answer: "<alerts>",
  },

  {
    prompt: "The condition in an IF statement is enclosed with a ___?",
    options: [
      "<quotes>",
      "<curly brackets>",
      "<parenthisis>",
      "<square brackets>",
    ],
    answer: "<parenthisis>",
  },

  {
    prompt: "Arrays in JavaScript can be used to store ___?",
    options: ["<numbers>", "<strings>", "<other arrays>", "<all of the above>"],
    answer: "<all of the above>",
  },

  {
    prompt:
      "Strings must be enclosed with ___ when being used to assign variables",
    options: ["<commas>", "curly brackets", "<quotes>", "<parenthisis>"],
    answer: "<quotes>",
  },

  {
    prompt:
      "A very useful tool used during developments and debugging for printing content to the debugger is?",
    options: [
      "<console.log>",
      "<for loops>",
      "<terminal/bash>",
      "<javascript>",
    ],
    answer: "<console.log>",
  },
];

// DOM ELements

var questionsEL = document.querySelector("#questions");
var timerEL = document.querySelector("#timer");
var choicesEL = document.querySelector("#options");
var submitBtn = document.querySelector("#submit-score");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEL = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");

//Quiz before start

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

//startquiz front page hide

function quizStart() {
  timerId - setInterval(clockTick, 1000);
  timerEL.textContent = time;
  var landingScreenEL = document.getElementById("start-screen");
  landingScreenEL.setAttribute("class", "hide");
  questionsEL.removeAttribute("class");
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var promptEl = document.getElementById("question-words");
  promptEl.textContent = currentQuestion.prompt;
  choicesEL.innerHTML = "";

  currentQuestion.options.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + "." + choice;
    choiceBtn, (onclick = questionClick);
    choicesEL.appendChild(choiceBtn);
  });
}

function questionClick() {
  if (this.vlue !== question[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    timerEL.textContent = time;
    feedbackEL.textContent = "WRONG!";
    feedbackEL.style.color = red;
  } else {
    feedbackEL.textContent = "CORRECT!";
    feedbackEL.style.color = "green";
  }
  feedbackEL.setAttribute("class", "feedback");
  function setTimeout() {
    feedbackEL.setAttribute("class", "feedback hide");
  }
  2000;
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);
  var endScreenEL = document.getElementById("quiz-end");
  endScreenEL.removeAttribute("class");
  var finalScoreEL = document.getElementById("score-final");
  finalScoreEL.textContent = time;
  questionsEL.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timerEL.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighScore() {
  var name = nameEl.ariaValueMax.trim();
  if (mname !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      name: name,
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}

nameEl.onkeyup = checkForEnter;

submitBtn.onclick = saveHighScore;

startBtn.onclick = quizStart;
