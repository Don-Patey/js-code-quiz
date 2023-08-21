// list of questions and answers

var questions = [
    {
    prompt: "Commonly used data types do NOT include:",
    options: ["<alerts>", "<booleans>", "<string>", "<numbers>"],
    answer: "<alerts>"
    },


    {
    prompt: "The condition in an IF statement is enclosed with a ___?",
    options:["<quotes>","<curly brackets>", "<parenthisis>", "<square brackets>"],
    answer: "<parenthisis>"
    },
    
    {
        prompt: "Arrays in JavaScript can be used to store ___?",
        options: ["<numbers>", "<strings>", "<other arrays>", "<all of the above>"],
        answer: "<all of the above>"
    },

    {
        prompt: "Strings must be enclosed with ___ when being used to assign variables",
        options: ["<commas>", "curly brackets", "<quotes>", "<parenthisis>"],
        answer: "<quotes>"
    },

    {
        prompt: "A very useful tool used during developments and debugging for printing content to the debugger is?",
        options: ["<console.log>", "<for loops>", "<terminal/bash>", "<javascript>"],
        answer: "<console.log>"
    }
]

// DOM ELements

var questionsEL = document.querySelector('#questions');
var timerEL = document.querySelector('#timer');
var choicesEL = document.querySelector('#options');
var submitBtn = document.querySelector('#submit-score');
var startBtn = document.querySelector('#start');
var nameEl = document.querySelector('#name');
var feedbackEL = document.querySelector('#feedback');
var reStartBtn = document.querySelector('#restart');

//Quiz before start

var currentQuestionIndec = 0
var time = questions.length * 15;
var timerId;

//startquiz front page

function quizStart() {
    timerId - setInterval(clockTick, 1000);
    timerEL.textContent = time;
    var landingScreenEL = document.getElementById('start-screen');
    landingScreenEL.setAttribute('class', "hide");
    questionsEL.removeAttribute('class');
    getQuestion();
}