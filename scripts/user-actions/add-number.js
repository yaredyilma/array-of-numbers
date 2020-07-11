'use strict';
console.log('--- loading: add number');

const addNumberHandler = () => {
  console.log('\n--- calling: add number handler');

  const userInput = prompt('please, insert a number');
  console.log('userInput:', typeof userInput, '\n', userInput);
  if (userInput=== null) {
    return;
  }

  const userNumber = +userInput;
  console.log('userNumber:', typeof userNumber, '\n', userNumber);
  if (Object.is(userNumber, NaN)) {
    alert(`${userInput} is not a valid number`);
    return;
  }

  console.log('numbers (before):', typeof numbers, '\n', numbers);
  // add the user's number to the main shared array of numbers
  number.push(userNumber);
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler();
};
