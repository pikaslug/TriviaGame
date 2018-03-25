var panel = $("quiz-area");

//Questions live here:

var questions = [{
question: "add question here",
answers: [ "answer1", "answer2","ect"],
correctAnswer: "correct answer"
},
{
    question: "add question here",
    answers: [ "answer1", "answer2","ect"],
    correctAnswer: "correct answer"
    },
    //repeat for all questions




]








var timer;
var game ={

    correct: 0,
    incorrect: 0,
    counter: 120,

//make the counter go down. If counter is equal to zero; Time Out
    countdown: function(){
        game.counter--;
        $('#counter-number').html(game.counter);
        if (game.counter === 0){
            conslole.log('Time Up!');
            game.done();
        }
    },

//When I click on you, count down from 120
start: function(){
    //every second, count down
    timer = setInterval(game.countdown, 1000);
    $('#sub-wrapper').prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    // for starting the game
    $('#start').remove();

    //this will run the code through all the questions and answers
   for (var i =  0; i<questions.length; i++){
        panel.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++){
            panel.append("<input type='radio' name='question-"+ i +
            "' value='" + questions[i].answers[j] + " ''>" + questions[i].answers[j]);

      }
 }
panel.append("<button id='done'>Done</button>");

},
//If you check this answer, check to see if it is indeed correct
done: function(){
    $.each($("input[name='question-0']:checked"), function(){
        if ($(this).val() === questions[0].correctanswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });
//Add function for more questions HERE

this.result();
},
//take away the questions and show the game results
result: function() {

    clearInterval(timer);

    $("sub-wrapper h2").remnove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct))+"</h3>")

}
};
//Click Events

$(document).on("click", "#start", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.done();
});