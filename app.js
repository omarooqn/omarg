let display=document.querySelector('h1')
let result=0;
display.innerText=result

function count(){
result++
  display.innerText= result;
   
}

//clear
function cl(){
    result=0
    display.innerText= result;
}


