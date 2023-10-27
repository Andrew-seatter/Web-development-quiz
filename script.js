//some kind of questions array
//object with question and then options array and answer property 
//{
// question : spotify or apple music
// options : [spotify, apple music, physical media]
//answer: spotify
//}

//currentQuestion = 0

//questions[currentQuestion].question, questions[currentQuestion].answer

//create question element
// append options elements
//event handler => need to check if clicked option is answer
//does target value === answer

//where are we in the question list
//need to track with the index

//need a function for starting timer
//need a function for starting the questions
//both those get called on quiz start

// at the end of quiz, save time (Score) and display high scores

var questions = [
    {
    question: 'What does HTML stand for',
    options: ['Hyper Tag Markup Language', 'Hyper Text Markup Language', 'Hyperlinks Text Mark Language', 'Hyperlinking Text Marking Language'],
    answer: 'Hyper Text  Markup Language'
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