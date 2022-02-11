// create questions
var questions = [
    new Question("What is HCF of 1095 and 1168?", ["37", "73","43", "83"], "73"),
    new Question("Which of the following years is not a leap year ?", ["800", "1600", "700","2000"], "700"),
    new Question("Which one of the following is not a prime number ?", ["31", "61", "71", "91"],"91"),
    new Question("What decimal o an hour is a seconds ?", [".0025", ".0256", ".00027", ".000126"], ".00027"),
    new Question("4.036 divided by 0.04 gives:", ["1.009", "10.09", "100.9", "None of these"], "100.9"),
    new Question("If 0.75:x::5:8,then x is equal to :", ["1.12", "1.2", "1.25", "1.30"], "1.2"),
    new Question("The furth proportional to 5,8,15 is:",  ["18", "24", "19", "20"], "24"),
    new Question("What was the day of the week on 28th may,2006", ["Thursday", "Friday", "Saterday", "Sunday"], "Sunday"),
    new Question("The last day of a centuary cannot be",  ["Monday", "Wednesday", "Tuesday", "Friday"], "Tuesday"),
    new Question("What will  be the day of the week 15th August,2010.",  ["Sunday", "Monday", "Tuesday", "Friday"], "Sunday")

        
];

function login()
{
var regex=/abc/i;
var regex1=/namrata04/i;
var str=document.getElementById("text1").value;
var str1=document.getElementById("text2").value;
if(str.match(regex) && str1.match(regex1))
{
quiz.Quiz_page();

}

};

function Quiz_page() {
    if(quiz.isEnded()) {
        showScores();
        
    }
    else {
                 // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }

};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        Quiz_page();
    }
};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};


function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
// create quiz
var quiz = new Quiz(questions);

// display quiz
Quiz_page();

