// writing a function declaration

function doSquareCalculation(number1, number2) {
   const number1Squared = number1 * number1;
   const number2Squared = number2 * number2;
   const sum = number1Squared + number2Squared;
   const sumSquared = sum * sum;
   return sumSquared;
}

console.log(doSquareCalculation(20, 20))

// function expression 

const doSquareCalculation2 = function(number1, number2) {
   const number1Squared = number1 * number1;
   const number2Squared = number2 * number2;
   const sum = number1Squared + number2Squared;
   const sumSquared = sum * sum;
   return sumSquared;
};

console.log(doSquareCalculation2(20, 20))


// Arrow function

const doSquareCalculation3 = (number1, number2) => {
   const number1Squared = number1 * number1;
   const number2Squared = number2 * number2;
   const sum = number1Squared + number2Squared;
   const sumSquared = sum * sum;
   return sumSquared;
};

