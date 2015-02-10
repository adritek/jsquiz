var score = 0; //initialise score
var quiz = [
  ["What is Superman's real name?", "Clarke Kent"],
  ["What is Wonder Woman's real name?", "Dianne Prince"],
  ["What is Batman's real name?", "Bruce Wayne"]
];

play(quiz);

function play(quiz){
  for (var i= 0, question, answer, max = quiz.length; i < max; i++){
    question = quiz[i][0];
    answer = ask(question);
    check(answer);
  }

  function ask(question){
    return prompt(question);
  }

  function check(answer){
    if (answer.toLowerCase() === quiz[i][1].toLowerCase()){
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
