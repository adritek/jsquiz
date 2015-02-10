// Dom references
var $question = document.getElementById("question");
var $feedback = document.getElementById("feedback");
var $score = document.getElementById("score");

// Initialise variables
var score = 0; //initialise score
var quiz = {
  "name": "Superhero name quiz",
  "description": "It's a superhero quiz, how well do you know your superheros?",
  "question": "What is the real name of ",
  "questions":
    [
      {"question": "Superman", "answer": "Clark Kent"},
      {"question": "Batman", "answer": "Bruce Wayne"},
      {"question": "Wonder Woman", "answer": "Diane Prince"}
    ]
  };

// View functions
function update(element,content,klass){
  var p = element.firstChild || document.createElement('h3');
  p.textContent = content;
  element.appendChild(p);
  if(klass){
    p.className = klass;
  }
}

// Init
play(quiz);

function play(quiz){
  for (var i= 0, question, answer, max = quiz.questions.length; i < max; i++){
    question = quiz.questions[i].question;
    answer = ask(question);
    check(answer);
    update($score,score);
  }

  function ask(question){
    return prompt(quiz.question + question);
  }

  function check(answer){
    if (answer.toLowerCase() === quiz.questions[i].answer.toLowerCase()){
      score++;
    } else {
      alert("Sorry, that's wrong :(");
    }
  }

  // end game
  gameOver();
  function gameOver(){
    alert("You scored: " + score + " out of " + quiz.length + "!");
  }
}
