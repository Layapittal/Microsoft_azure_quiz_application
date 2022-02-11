// create questions
var questions = [
    new Question("A vendor bought tofees at 6 for rupee .how many for a rupee must he sell to gain 20%. ", ["3", "4","5", "6"], "5"),
    new Question("If selling price is doubled ,the profit triples.find the profit percent.", ["100", "500", "60", "400"], "100"),
    new Question("The compound interest on Rs.30,000 st 70% per annum is Rs 4347.The period(in years) is:", ["2", "3", "4", "5 "], "2"),
    new Question("The greatest number of four digit which is divisible by 15,25,40 and 75 is: ", ["9000", "9400", "9600", "9800"], "9600"),
    new Question("What is the unit digit in 2^30 ? ", ["3", "4","1", "2"], "4"),
    new Question("Find the remainder when 67^99 is divided by 7", ["4", "6","1", "2"], "1"),
    new Question("Half percent ,written as a decimal ,is", ["0.2", "0.02","0.005", "0.05"], "0.005"),
    new Question("Today is Monday .After 63 days,it will be:", ["Tuesday", "Monday","Sunday", "Saterday"], "Monday"),
    new Question("Find the odd man out ? 396,462,572,427,671,264.", ["671", "462","427", "264"], "427"),
    new Question("The integer value of x a which inequality fails,  3x+12 18", ["1", "-7","-4", "2"], "2")
     
      

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

