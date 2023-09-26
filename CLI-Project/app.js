var readlineSync=require('readline-sync');

//userInfo
var score=0;
var name="";

//list of questions and answers
var questions=[
  {
    question:"How many Infinity Stones are there? :",
    answer:"Six"
  },
  {
    question:"Captain America’s shield and Bucky's arm are made of what? :",
    answer:"Vibranium"
  },
  {
    question:"Hawkeye has how many children? :",
    answer:"Three"
  },
  {
    question:"Who is the Winter Soldier? :",
    answer:"Bucky"
  },
  {
    question:"Thor played what video game in Avengers: Endgame? :",
    answer:"Fortnite"
  }
];

//welcome user
function welcome(){
  name=readlineSync.question('What is your name: ');
  console.log("Welcome "+name+" !Let's see how much you know about MARVEL");
  console.log("---------------------------");
}

//processing
function play(question,answer){
  var mainAnswer=readlineSync.question(question);
  if(mainAnswer.toUpperCase()===answer.toUpperCase()){
    score=score+1;
    console.log("You are right \nYour Score is "+score);
    console.log("\n-------------------------\n");
  }
  else{
    console.log("You are wrong \nYour Score is "+score);
    console.log("Correct answer is "+answer);
    console.log("\n-------------------------\n");
  }
}

//output
function game(){
  for(var i=0;i<questions.length;i++){
     play(questions[i].question,questions[i].answer); 
  }
}

//user score
function yourScore(){
  console.log("Well Done "+name+" \nYour completed this quiz successfully");
  console.log("Your score is "+score);
}


welcome();
game();
yourScore();
