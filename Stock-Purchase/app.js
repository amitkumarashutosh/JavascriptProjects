const initialPrice=document.querySelector('#initial-price');
const quantityOfStock=document.querySelector('#quantity-of-stock');
const currentPrice=document.querySelector('#current-price');
const checkButton=document.querySelector('.btn');
const userOutput=document.querySelector('.user-output');

function calculateProfitLoss(initial,quantity,current){

    if(initial&&quantity&&current){
        if(initial>current){
            let loss=initial-current;
            let lossPer=((loss/initial)*100)*quantity;
            let output=lossPer.toFixed(2);
            userOutput.innerText=`KEEP LEARNING! YOUR LOSS IS ${output}`;
        }
        else if (current>initial){
            let profit=current-initial;
            let profitPer=(profit/current)*100;
            let output=profitPer.toFixed(2);
            userOutput.innerText=`CONGRATS! YOUR PROFIT IS ${output}`;
        }
        else{
            userOutput.innerText=`NO PROFIT NO LOSS!`;
        }

    }
    else{
        userOutput.innerText="Require to fill all the fields";
    }

}

function convertVariables(){
    let initalAmout=Number(initialPrice.value);
    let quantity=Number(quantityOfStock.value);
    let currentAmount=Number(currentPrice.value);
    calculateProfitLoss(initalAmout,quantity,currentAmount); 
}

function showOutput(){
    convertVariables();
}

checkButton.addEventListener('click',showOutput);