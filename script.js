// variable set to grab elements or store values needed
var quizBody = document.querySelector('#quiz');
var startButton  = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer-text');
var answerCheckEl = document.querySelector('#answerCheck');
var timerCount;
var timer;
var currentQuestion = 0;
var currentAnswer;
var scoresArray = [];

// questions array
var questions = [
    {
    question: 'What does HTML stand for',
    options: ['Hyper Tag Markup Language', 'Hyper Text Markup Language', 'Hyperlinks Text Mark Language', 'Hyperlinking Text Marking Language'],
    answer: 'Hyper Text Markup Language'
},
{
    question: 'What symbol indicates a tag?',
    options: ['Angle brackets </>', 'Curved brackets {,}', 'Commas e.g ","', 'Exclamation Marks e.g !'],
    answer: 'Angle brackets </>'
},
{
    question: 'A CSS style sheet can be applied to multiple HTML files',
    options: ['True', 'False'],
    answer: 'True'
},
{
    question: 'What does CSS stand for?',
    options: ['Computer Syle Sets', 'Cascading Style Sets', 'Cascading Style Sheets', 'Computer Style Sheets'],
    answer: 'Cascading Style Sheets'
},
{
    question: 'Javascript is used for?',
    options: ['Controlling the playback of streaming media', 'Generating pop-up ads or alert boxes', 'Validating input values of a web form', 'All of the above'],
    answer: 'All of the above'
}
]

//interval timer function called at start of quiz
function  startTimer(){
    timerCount = 100;
    timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
        failQuiz();
    }
 }, 1000);
}

//quiz initilization function, tied to event listener on start button
function startQuiz() {
startTimer();
loadQues();
startButton.style.display = 'none';
startButton.disabled = true;
}

// function to display and index the questions
function loadQues(){
    var questionEl = document.querySelector('#ques');
    var optionsEl = document.querySelector('#options');

    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = '';
    
    //loops through the current questions options and creates elements for it on the html sheet
    //added classes to each element to help with styling later
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        var choicesDiv = document.createElement("div");
        var choice = document.createElement("button");
        choice.setAttribute('class', 'choiceButton');
        choicesDiv.setAttribute('class', 'choicesDiv');


        choice.textContent = questions[currentQuestion].options[i];
 
        choicesDiv.appendChild(choice);
        optionsEl.appendChild(choicesDiv);

        //check answer function tied it directly to each answer button with an event listener
        // checks the text value of each button and compares it to the answer value given the current element in the questions array
        choice.addEventListener('click', function(event){
            if (event.target.textContent === questions[currentQuestion].answer){
                nextQuestion();
                answerCheckEl.textContent = "Correct";
            } else {
                timerCount -= 10;
                nextQuestion();
                answerCheckEl.textContent = "Incorrect, -10 from score";
            }
        
        })
 }
}

//fail function for when timer runs out
function failQuiz() {
quizBody.textContent = 'Failed, timer is up';
startButton.disabled = false;
}

// next question function adds to the current question variable which will push us through the questions array to each corresponding element
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQues();
    } else {
        document.querySelector('#ques').remove();
        document.querySelector('#options').remove();
        loadScore();
    }
}

function loadScore() {

}

startButton.addEventListener("click", startQuiz);
console.log(currentQuestion);
console.log(currentAnswer);