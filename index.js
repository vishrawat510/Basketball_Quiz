var readlineSync= require("readline-sync");
console.log("Welcome to Vishal's Quiz about Basketball")
var UserName= readlineSync.question("May I know your name please ")
var score=0;

var msg= 'Welcome '+ UserName
console.log(msg + " Let us test your knowledge about the game.")

function quiz(question,answer)
{
var userAnswer= readlineSync.question(question);

if(userAnswer=== answer)
{
  console.log("you are correct!")
  score++;
 }
else {
  console.log("Sorry,you are wrong!")
  score--;
}
 console.log("Score is: ",score )
 console.log("----------------")
}

var questions=[{
  question: "Basketball is played with how many members in a team? ",
  answer: "5"
  },
  {question: "How much points given when you convert the Basketball? ",
  answer: "2"},
  {question: "How much score is given when you score a 3-pointer? ",
  answer: "3"},
  {question: "How much score is given when you score a free shot over an intentional foul? ",
  answer: "1"}


  ]

for( var i=0; i<questions.length; i++)
{
  var currentquestion=questions[i];
  quiz(currentquestion.question,currentquestion.answer)
}

console.log("Hurrayy "+  UserName + " Your Final Score is ", score);


 



