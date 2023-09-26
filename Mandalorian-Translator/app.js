const userInput=document.getElementById('user-input');
const userOutput=document.getElementById('user-output');
const checkButton=document.querySelector('.btn');

serverAPI="https://api.funtranslations.com/translate/mandalorian.json";


function errorHandler(){
    alert("something went wrong with server! try after sometime");
}

function clickHandler(){
    serverURL=`${serverAPI}?text=${userInput.value}`;
    fetch(serverURL)
        .then(response => response.json())
        .then(json =>{
            userOutput.innerText=json.contents.translated;
        })
        .catch(errorHandler)
};


checkButton.addEventListener('click',clickHandler);