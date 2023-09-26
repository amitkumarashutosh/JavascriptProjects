const dateOfBirth=document.querySelector('#date-of-birth');
const luckyNumber=document.querySelector('#lucky-number');
const checkNumberBtn=document.querySelector('.btn');
const userOutput=document.querySelector('.user-output');


function dateOfBirthSum(){
    let userDate=dateOfBirth.value;
    userDate=userDate.replaceAll('-',"");
    let sum=0;
    for(let i=0;i<userDate.length;i++){
        sum=sum+Number(userDate.charAt(i));
    }
    return sum;
}

function checkNumberIsLucky(){
    let sum=dateOfBirthSum();
    if(sum%luckyNumber.value === 0){
        userOutput.innerText="CONGRATULATIONS! YOUR BIRTHDAY IS LUCKY";
    }
    else{
        userOutput.innerText="SORRY! NOT LUCKY";
    }
}

checkNumberBtn.addEventListener('click',checkNumberIsLucky);

