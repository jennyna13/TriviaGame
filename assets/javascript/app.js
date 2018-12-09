$(document).ready(function(){

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var userGuess = "";
    var index;
    var pick;
    var Timer = 10;
    var intervalId;
    var trivia = [{
        photo:"", 
        question: "Which of the following has not been the name of the hospital?",
        chocies: ["Seattle Grace Mercy West Hospital", "Seattle Grace Hospital", "Grey Sloan Memorial Hospital", "Grey Shepherd Memorial Hospital"],
        answer: 3,}, 
        {
        photo: "",
        question: "Which of the following has Meredith not lived through?",
        choices:["A bomb", "A car accident","Drowning",],
        answer: 1,
        },
        {
        photo: "",
        question: "Which of the following universities did Cristina Yang NOT earn a degree from?",
        choices: ["Smith College", "Yale University", "Standford University", "University of California at Berkely"],
        answer:1,
        },
        {
        photo: "",
        question: "Where does Derek get an opportunity to work in Season 10?",
        choices: ["Washington, D.C.", "New York", "Arizona", "California"],
        answer: 0,
        }, 
        {
        photo: "",
        question: "What nickname do the interns give Meredith?",
        choices: ["The Nazi", "Queen of Darkness", "Queen of General", "Medusa"],
        answer: 3,
        },  
        {
        photo: "",
        question: "Which two of the original interns failed their boards?",
        choices: ["George and Izzie", "Alex, and Meredith", "George and Alex", "Alex and Izzie"],
        answer: 2,
        },
        {
        photo: "",
        question: "Izzie Stevens was diagnosed with stage IV metastatic melanoma in Season 5. Which symptom made her realize something was wrong?",
        choices: ["Hallucinations of her dead fiance", "Abdominal cramps and vomiting", "Headaches and nausea", "Rapid weight loss"],
        answer: 0,
        },
        {
        photo: "",
        question: "How many half-sisters does Meredith Grey have?",
        choices: ["One", "Two", "Three", "Four"],
        answer: 2,
        },
        {
        photo: "",
        question: "How did Arizona Robbins lose her leg?",
        choices: ["Car crash", "Hurricane", "Earthquake", "Plane crash"],
        answer: 3,
        },
        {
        photo: "",
        question: "What did Derek always say before starting an operation?",
        choices: ["It's a beautiful day to save lives", "Let's save a life", "It's a good day", "It's a great day to save lives"],
        answer: 0,
        }
     ];
    
$("#wrapper").show();
$("#wrapper2").hide();
$("#wrapper3").hide();

$(".button2").on("click", function(){
    nextQuestion();
    $("body").attr("background", "#");
    $("#wrapper").hide();
    $("#wrapper3").hide();
    $("#wrapper2").show();
    $(".timer").text(Timer);
    $(".question").text("<h3>" + trivia[i].question + "</h3>");
   $("#answer1").text("<h3>" + trivia[i].chocies[0]+ "</h3>");
   $("#answer2").text("<h3>" + trivia[i].chocies[1]+ "</h3>");
   $("#answer3").text("<h3>" + trivia[i].chocies[2]+ "</h3>");
   $("#answer4").text("<h3>" + trivia[i].chocies[3]+ "</h3>");
    $(".image").attr();
    runTimer ();
    countDown();
}); 

 
    function nextQuestion(){
    $(".question").show();
    $(".timer").show();

    $(".answer").empty().hide();
    game.time_start();
}

    //when question set is over
    if(trivia.question>9){
        game.finish_restart();
    }

    //show question
    $(".question_sec").append("<h3>"+questions[game.q_arr].question+"</h3>");


    //show examples
    for(var i=0; i<questions[game.q_arr].examples.length; i++){

        var test = $("<p>").addClass("eg");
        test.append("<button type='button' class='btn btn-outline-light'>"+questions[game.q_arr].examples[i]+"</button>");

    $(".examples_sec").append(test);
    };

$(".answerButton").on("click", function(){

});

function runTimer (){
    intervalId = setInterval(decrement, 1000);
}
function countDown(){
    $(".timer").text(Timer);
    Timer--;
    if (Timer === 0) {
        stop();
        $("#wrapper").hide();
        $("#wrapper2").hide();
        $("#wrapper3").show();
        unanswered ++;
        $(".showAnswer").text("<h3>Time's Up!" + "</h3>")
    }
}
function answerChosen(){

}
function stop() {
	clearInterval(intervalId);
}

});
