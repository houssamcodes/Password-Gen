const upperCases = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
const lowerCases = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
const numbers = [1,2,3,4,5,6,7,8,9];
const symbols = ["!","","#","@","$","'",".","*","&","%","-","+","-"];
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const display = document.querySelector('.display-code-el');
const chika = document.querySelector('#checkeds1');
const chika1 = document.querySelector('#checkeds2');
const chika2 = document.querySelector('#checkeds3');
const chika3 = document.querySelector('#checkeds4');

document.querySelector('#checkeds1').addEventListener('click',cheked);
document.querySelector('#checkeds2').addEventListener('click',cheked);
document.querySelector('#checkeds3').addEventListener('click',cheked);
document.querySelector('#checkeds4').addEventListener('click',cheked);


function cheked(){
  display.textContent = '';
  

  if(chika.checked){
    for(let i = 0; i < upperCases.length ; i++){
      let randomNumber = Math.floor(Math.random() * upperCases.length);
      const randoUpeer = upperCases[randomNumber];
      console.log(randoUpeer);
      display.textContent += randoUpeer;
      
    }
  }else if(chika1.checked){
    for(let i = 0; i < lowerCases.length ; i++){
      let randomNumber = Math.floor(Math.random() * lowerCases.length);
      const randoUpeer = lowerCases[randomNumber];
      console.log(randoUpeer);
  
      display.textContent += randoUpeer;  
    }
  }else if(chika2.checked){
    for(let i = 0; i < numbers.length ; i++){
      let randomNumber = Math.floor(Math.random() * numbers.length);
      const randoUpeer = numbers[randomNumber];
      console.log(randoUpeer);
      display.textContent += randoUpeer; 
    }
  }else if(chika3.checked){
    for(let i = 0; i < symbols.length; i++){
    let randomSymbol = Math.floor(Math.random() * symbols.length);
    const randoSymbols = symbols[randomSymbol];
    console.log(randoSymbols);
    display.textContent += randoSymbols;  
    }
  }
}

document.querySelector('.rest').addEventListener('click',rest)

function rest(){
  let passwordRest = 10;
  display.textContent = '';
  for(let i = 0; i < passwordRest ; i++ ) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    let indexNumber = characters[randomNumber];
    console.log(indexNumber);
    display.textContent += indexNumber;
  }
}

document.querySelector('.copy').addEventListener('click', copyPassword);

function copyPassword() {
  const password = display.textContent;
  if (!password) return;
  const tempInput = document.createElement('textarea');
  tempInput.value = password;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  display.textContent= "Copied";
  
}