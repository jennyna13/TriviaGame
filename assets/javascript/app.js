$(document).ready(function(){

    var Timer = 10;
    var intervalId;

    var game = {
        currentQuestion: 0,
        counter: countStartNum,
        correct: 0,
        incorrect: 0,
        unanswered: 0
    }

    var trivia = [{
        photo:"", 
        question: "Which of the following has not been the name of the hospital?",
        chocies: ["Seattle Grace Mercy West Hospital", "Seattle Grace Hospital", "Grey Sloan Memorial Hospital", "Grey Shepherd Memorial Hospital"],
        answer: "Grey Shepherd Memorial Hospital"}, 
        {
        photo: "",
        question: "Which of the following has Meredith not lived through?",
        choices:["A bomb", "A car accident","Drowning",],
        answer: "A car accident",
        },
        {
        photo: "",
        question: "Which of the following universities did Cristina Yang NOT earn a degree from?",
        choices: ["Smith College", "Yale University", "Standford University", "University of California at Berkely"],
        answer:"Yale University",
        },
        {
        photo: "",
        question: "Where does Derek get an opportunity to work in Season 10?",
        choices: ["Washington, D.C.", "New York", "Arizona", "California"],
        answer: "Washington, D.C.",
        }, 
        {
        photo: "",
        question: "What nickname do the interns give Meredith?",
        choices: ["The Nazi", "Queen of Darkness", "Queen of General", "Medusa"],
        answer: "Medusa",
        },  
        {
        photo: "",
        question: "Which two of the original interns failed their boards?",
        choices: ["George and Izzie", "Alex, and Meredith", "George and Alex", "Alex and Izzie"],
        answer: "George and Alex",
        },
        {
        photo: "",
        question: "Izzie Stevens was diagnosed with stage IV metastatic melanoma in Season 5. Which symptom made her realize something was wrong?",
        choices: ["Hallucinations of her dead fiance", "Abdominal cramps and vomiting", "Headaches and nausea", "Rapid weight loss"],
        answer: "Hallucinations of her dead fiance",
        },
        {
        photo: "",
        question: "How many half-sisters does Meredith Grey have?",
        choices: ["One", "Two", "Three", "Four"],
        answer: "Three",
        },
        {
        photo: "",
        question: "How did Arizona Robbins lose her leg?",
        choices: ["Car crash", "Hurricane", "Earthquake", "Plane crash"],
        answer: "Plane crash",
        },
        {
        photo: "",
        question: "What did Derek always say before starting an operation?",
        choices: ["It's a beautiful day to save lives", "Let's save a life", "It's a good day", "It's a great day to save lives"],
        answer: "It's a beautiful day to save lives",
        }
     ];
    
$("#wrapper").show();
$("#wrapper2").hide();
$("#wrapper3").hide();

$(".button2").on("click", function(){
    $("body").attr("background", "#");
    $("#wrapper").hide();
    $("#wrapper3").hide();
    $("#wrapper2").show();
    $(".timer").text(Timer);
}); 

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
function stop() {
	clearInterval(intervalId);
}
function decrement(){
    Timer--;
    $(".timer").text(Timer);
    if (Timer === 0) {
        stop();
        $("#wrapper").hide();
        $("#wrapper2").hide();
        $("#wrapper3").show();
        unanswered ++;
        $(".showAnswer").text("<h3>Time's Up!" + "</h3>")
    }
}

});
