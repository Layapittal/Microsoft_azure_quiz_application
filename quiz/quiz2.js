function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
//prototpe inherits the quiz method and its properties
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
Quiz.prototype.random=function random(){
var v=math.Random(questions);
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
