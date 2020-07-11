'use strict';
console.log('--- loading: reset');

// this works!  no need to change anything

// just using the pre-written code 

const resetHandler = () => {
  console.log('\n--- calling: reset handler');
  console.log('numbers (before):', typeof numbers, '\n', numbers);

  numbers = [];
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler();
};
