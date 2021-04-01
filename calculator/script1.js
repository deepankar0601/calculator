const display = document.querySelector('h1');
const div = document.getElementById('display-div');

const btns = document.querySelectorAll('button');
let screenValue='';
let totalVal;
for(let btn of btns){
    btn.addEventListener('click',(e)=>{
     screenValue=e.target.value;
     console.log(screenValue);
     if(display=='0'){
         display.textContent = screenValue;
     }
     else if(screenValue =='C'){
           screenValue=''
           display.textContent=' ';
         }else if(screenValue == '='){
         totalVal = display.textContent;
        display.textContent = eval(totalVal);
        //display.textContent = totalVal;
        console.log(totalVal);
    }
     else{
         let value = display.textContent;
         if(display.textContent =='0'){
            display.textContent = value; 
         }else{
         display.textContent = value + screenValue;
     }}

      })
}