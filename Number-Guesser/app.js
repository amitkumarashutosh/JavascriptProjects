//game values
let min=1,
    max=10,
    winningNum=findRandom(),
    guessLeft=3;

//variables
const game=document.getElementById('game');
const minNum=document.querySelector('.min-num');
const maxNum=document.querySelector('.max-num');
const guessInput=document.getElementById('guess-input');
const guessBtn=document.getElementById('guess-btn');
const message=document.querySelector('.message');

//assign values
minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',clickHandler);

function clickHandler(){
    let value=Number(guessInput.value);

    //value is not between range
    if(value<min||value>max){
        setMessage(`Enter a number between ${min} and ${max}`,'red');
    }
    else{
        //winnig
        if(value===winningNum){
            setMessage(`${value} is correct! You WIN!`,'green');
            playAgain();
        }
        else{
            guessLeft--;
            if(guessLeft===0){
                setMessage(`${winningNum} is correct! You LOST!`,'red');
                playAgain();
            }
            else{
                guessInput.value='';
                setMessage(`${guessLeft} guess is left`,'red');
            }
        }
    }
}

function playAgain(){
    guessInput.disabled=true;
    guessBtn.value='Play Again';
    guessBtn.classList.add('play-again');
}

function setMessage(msg,color){
    message.textContent=msg;
    message.style.color=color;
    guessInput.style.borderColor=color;
}

function findRandom(){
    return Math.floor(Math.random()*(max-min)+1);
}
