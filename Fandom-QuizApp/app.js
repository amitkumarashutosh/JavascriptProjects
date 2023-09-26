var readlineSync=require('readline-sync');

var score=0;
var name="";
function welcome(){
    name=readlineSync.question("what's your name: ");
    console.log("welcome "+name+" !lets start the quiz");
    console.log("\n-------------------\n");
}

var questions=[
  {
    question:"There are about how many stars in a galaxy?",
    A:"Thousands",
    B:"Millions",
    C:"Billions",
    answer:"C"
  },
  {
    question:"We live in the __________ galaxy",
    A:"Milky Spiral",
    B:"Milky Way",
    C:"Solar Swirl",
    answer:"B"
  },
  {
    question:"What type of galaxy is the largest?",
    A:"Spiral",
    B:"Elliptical",
    C:"Circle",
    answer:"B"
  },
  {
    question:"At the center of most, if not all galaxies is a",
    A:"Giant black hole",
    B:"Big Bang",
    C:"Giant Sun",
    answer:"A"
  },
  {
    question:"At the center of our solar system is",
    A:"Dark matter",
    B:"The Earth",
    C:"A star",
    answer:"C"
  }
];

function play(question,optionA,optionB,optionC,answer){
  console.log(question+'\nA.'+optionA+'\nB.'+optionB+'\nC.'+optionC+'\n');
  var userInput=readlineSync.question("Your ans:");
  if(userInput.toUpperCase()===answer.toUpperCase()){
    score=score+1;
    console.log("You are Correct \nScore is "+score);
    console.log("\n--------------------\n");
  }
  else{
    console.log("You are wrong! \nYour score is "+score);
    console.log("Correct answer is "+answer);
    console.log("\n--------------------\n");
  }
}


function game(){
  for(var i=0;i<questions.length;i++){
play(questions[i].question,questions[i].A,questions[i].B,questions[i].C,questions[i].answer);
    }
}

function userScore(){
  console.log(name+" your score is "+score);
}
  
welcome();
game();
userScore();

