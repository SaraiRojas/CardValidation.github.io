import validator from './validator.js';


//Select input[type="text"]
const cardNum = document.querySelector('#cardNum');
const validate = document.querySelector('#validate');

//Get the card number 
let nums = "";

cardNum.addEventListener('change', keepNum);


function keepNum(e) {
    nums = e.target.value.replace(/\s/g, ''); /*Delate empty spaces*/ /*typeof num = string*/
}

//Shows if the card number is valid or not 
validate.addEventListener('click', showAnswer);

function showAnswer( ) {
    const resultBox = document.querySelector('#result');
    const resultMessage =document.querySelector('#resultMessage');
    let maskNums = validator.maskify(nums);
    if(/^\d+$/.test(nums) && nums.length >= 13 && nums.length <= 18 && nums != ""){
        let isValidResult = validator.isValid(nums);
        
        if(isValidResult){
            resultBox.style.borderColor = 'var(--valid-color)';
            resultBox.style.color = 'var(--valid-color)';
            resultMessage.textContent = 'Valid card number';
            cardNum.value = maskNums;
            resultBox.style.display = 'block';
            
        }else{
            resultBox.style.borderColor = 'var(--invalid-color)';
            resultBox.style.color = 'var(--invalid-color)';
            resultMessage.textContent = 'Invalid card number';
            cardNum.value = maskNums;
            resultBox.style.display = 'block';
        }
    }else{
            resultBox.style.borderColor = 'var(--warning-color)';
            resultBox.style.color = 'var(--warning-color)';
            resultMessage.textContent = 'Please enter a card number';
            cardNum.value = '';
            resultBox.style.display = 'block';
    }


}



