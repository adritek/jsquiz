var score = 0; //initialise score
var quiz = [
  ["What is Superman's real name?", "Clarke Kent"],
  ["What is Wonder Woman's real name?", "Dianne Prince"],
  ["What is Batman's real name?", "Bruce Wayne"]
];

for ( var i = 0, max = quiz.length; i < max; i++ ){
  var answer = prompt( quiz[i][0] );

  if (answer.toLowerCase() === quiz[i][1].toLowerCase()){
    score++;
  } else {
    alert("Incorrect");
  }
}

alert("Game Over, you scored " + score + " points");
