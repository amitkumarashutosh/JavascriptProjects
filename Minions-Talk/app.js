const userInput=document.getElementById('user-input');
const userOutput=document.getElementById('user-output');
const talkButton=document.querySelector('.btn');

const serverAPI="https://api.funtranslations.com/translate/minion.json";

function errorHandler(){
    alert('server is not working properly! try after sometime');
}


function clickHandler(){
    serverURL=`${serverAPI}?text=${userInput.value}`;
    fetch(serverURL)
        .then(response =>response.json())
        .then(json =>{
            userOutput.innerText=json.contents.translated;
        })
        .catch(errorHandler)
};

talkButton.addEventListener('click',clickHandler);

