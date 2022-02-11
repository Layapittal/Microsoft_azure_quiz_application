// create questions
var questions = [
    new Question("The least number which should be added to 2", ["3", "13","23","33"], "23"),
    new Question("Find the lowest common multiple of 24,36 and 40.", ["120", "240", "360", "480"], "360"),
    new Question("The product of two numbers is 2028 and their H.C.F is 13. The number of such pair is:", ["1","2","3", "4"], "2"),
    new Question("The G.C.D of 1.08,0.36 and 0.9 is:", ["0.03", "0.9", "0.18", "0.108"], "0.18"),
    new Question("Some articles were bought at 6 articles for Rs 5 and sold at 5 articles for Rs.6 Gain percent is:", ["30%", "33%", "35%", "44%"], "44%"),
    new Question("Today it is Thursday.After 132 days,it will be ", ["Monday", "sunday","Wednesday","Thursday"], "Wednesday"),
    new Question("What is the value of c,if 8 is 4% of a.and 4 is 8% iof b. c equals b/a. ", ["12", "1/4","0.155","None of these"], "1/4"),
    new Question("Find the speed of the train,,if a train 142 m long passes a pole in 6 seconds. ", ["77.2 km/hr", "79.6 km/hr","84.9 km.hr","79.2 km/hr"], "84.9 km/hr"),
    new Question("The rate at which a sum becomes four times of  itself in 25 years at s.i will be:", ["30%", "25%","12%","49%"], "12%"),
    new Question("The maximum gap between two successive lea year is", ["4", "8","2", "1"], "8")
     


    
   
];
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

