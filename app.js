var panel = $("#quiz-area");

//Questions live here:
; console.log('Questions')
var questions = [{
question: "People first started eating bread around what year?",
answers: [ "5,000BC", "1984","10,000BC","Last summer at Grandma's house"],
correctAnswer: "10,000BC"
},
{
    question: "The first people to eat bread were?",
    answers: [ "Calvin & Hobbes", "The Egyptians","The Greeks", "The People of Yeaster Island"],
    correctAnswer: "The Egyptians"
    },
    //repeat for all questions
    {
        question: "Bread is known as the...?",
        answers: [ "Yo, bro you're breadwinning!", "The Staff of Life","Breadbasket of Desire","The Yeast Feast"],
        correctAnswer: "The Staff of Life"
        },

        {
            question: "One bushel of wheat yields how many loaves of white bread?",
            answers: [ "42", "60","78","What's a bushel?"],
            correctAnswer: "42"
            },
            {
                question: "In 1910...?",
                answers: [ "I wasn't born yet", "70% of bread eaten in the US was baked at home","Your dad had a horse","Man landed on the moon"],
                correctAnswer: "70% of bread eaten in the US was baked at home"
                },
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
            console.log('Time Up!');
            game.done();
        }
    },

//When I click on you, count down from 120
start: function(){
    //every second, count down
    timer = setInterval(game.countdown, 1000);
    $('#sub-wrapper').append("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    // for starting the game
    console.log("Does the Button Work?")
    $('#start').remove();

    //this will run the code through all the questions and answers
    // Loop through the questions dictionary, create a question element, and its corresponding answers elements

    for (var i = 0; i < questions.length; i++){
    panel.append("<h2 style='margin-top:20px'>" + questions[i].question+"</h2>")
        for (var j = 0; j < questions[i].answers.length; j++){
        panel.append("<div><input type='radio' name='question-"+ i + "'value='"+questions[i].answers[j] + " ''>" + questions[i].answers[j]+"</div>");
    
        }
    }
    
    



    //for (var i =  0; i<questions.length; i++){
       

    //In the questions dictionary, get the ith element + question key value
    //Tell the HTML to show the questions and answers 
    //Tell it to loop through the first question, then the second question, onwards
    //until it get to 5, then stop

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

    $("sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct))+"</h3>")

}
};
//Click Events

// $(document).on("click", "#start", function() {
//     game.start();
// });

$("#start").click(game.start());

$(document).on("click", "#done", function() {
    game.done();
});