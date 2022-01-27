const validator = {
  
  isValid: (cardNum) => {

    let inversedCardNum = [...cardNum].reverse(); /*cardNum is reversed*/
    const reducer = (a, b) => Number(a) + Number(b); /* Function used in reduce method */

    for (let i=1; i < inversedCardNum.length; i+=2){ /*For loop to iterate over inversedCardNum array */
        let doubleNum = inversedCardNum[i]*2; 
        if ( doubleNum > 9){ /*Checks for numbers of two digits*/
            let oneDigit = doubleNum -9; /*Turns double digit numbers into one digit*/
            inversedCardNum.splice(i, 1, oneDigit); /*adds an element in a specific position to an Array*/
        }else{
            inversedCardNum.splice(i, 1, doubleNum);
        }
    }

    let sumNums = inversedCardNum.reduce(reducer); /*Addition of every number in inversedCardNum array*/

    if (sumNums%10 == 0){ /*Checks if the sum is multiple of 10*/
        return true
    }else{
        return false
    }
  },

  maskify: (cardNum) => {
    
    let cardNums = [...cardNum]; /*Creates an array out of cardNum*/
    let maskNums = cardNums.map(function (num, i){ /*Replace numbers for #*/
        if (i <= cardNums.length-5){
            return '#'
        }else{
            return num
        }
    });

    return maskNums.join('') /*Returns an array as a string*/
  }

};

export default validator;
