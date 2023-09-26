const button=document.querySelectorAll('.button');
const input=document.querySelector('input');

let result=""

button.forEach(function(buttons){
    buttons.addEventListener('click',function(e){
        if(e.target.innerHTML==='='){
            result=eval(result)
            input.value=result;
        }
        else if(e.target.innerHTML==='Ac'){
            result=""
            input.value=result
        }
        else if(e.target.innerHTML==='Del'){
            result=result.slice(0,-1)
            input.value=result
        }
        else{
            result+=e.target.innerHTML;
            input.value=result
        }

    },false)
})

