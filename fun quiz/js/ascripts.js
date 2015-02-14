// Initialise variables
var $start = document.getElementById("start");

var quiz = {
  "name":"Super Hero Name Quiz",
  "description":"How many super heroes can you name?",
  "question":"What is the real name of ",
  "questions": [
    { "question": "Superman", "answer": "Clarke Kent" },
    { "question": "Batman", "answer": "Bruce Wayne" },
    { "question": "Wonder Woman", "answer": "Dianna Prince" }
  ]
}

// Dom references
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");

// Init
$start.addEventListener("click", function(){
  play(quiz);
}, false);

// Function definitions
function update(element, content, klass){
  var p = element.firstChild || document.createElement('h3');
  p.textContent = content;
  element.appendChild(p);
  if(klass){
    p.className = klass;
  }
}

function play(quiz){
  var score = 0;
  update($score, score);
  for (var i= 0, question, answer, max = quiz.questions.length; i < max; i++){
    question = quiz.questions[i].question;
    answer = ask(question);
    check(answer);
  }

  function ask(question) {
    update($question,quiz.question + question);
    return prompt("Enter your answer:");
  }

  function check(answer){
    if (answer.toLowerCase() === quiz.questions[i].answer.toLowerCase()){
      update($feedback, "Correct!", "right");
      score++;
      update($score, score)
    } else {
      update($feedback, "Wrong", "wrong");
    }
  }

  // end game
  gameOver();
  function gameOver(){
    alert("You scored: " + score + " out of " + quiz.length + "!");
  }
}
