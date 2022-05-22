//    input e pin jaivabe dekhabo
// ====================================

function getPin(){
    const pin = Math.round(Math.random() * 10000)
    // console.log(pin) 
    const pinString = pin + ''; //   ai string hoye gache
    if (pinString.length == 4){
        return pin;
    }
else {  // jodi 3 digit number ase agin call korbe funtion k
    return getPin();
}
}

function generatePIn(){
   const pin = getPin();
   document.getElementById('display-pin').value =pin ;
}


// event bubble
document.getElementById('key-pad').addEventListener('click', function(event){
//   console.log('any key pad')
// const number = event.target.innerText;
// const calc = document.getElementById('typed-numbers');
// const previousCalc = calc.value;
// const newCalc = previousCalc + number;
// calc.value = newCalc;

const number = event.target.innerText;
const calc = document.getElementById('typed-numbers');
if(isNaN (number)){
    if(number == 'C'){
        calc.value = '';
    }
}
else{
   
const previousCalc = calc.value;
const newCalc = previousCalc + number;
calc.value = newCalc;
}
})



// pin varify
function verifyPIn(){
    const pin = document.getElementById('display-pin').value; // 18 num line
    const typedNumber = document.getElementById('typed-numbers').value; //  number input
    const failError = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    if(pin == typedNumber){
        // const success = document.getElementById('notify-success');
        success.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        // const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
        success.style.display = 'none';
    }
}