'use strict';
console.log('--- loading: find less than');

/**
 * filters out all values that are not less than highValue
 * returns a new array, does not modify arrOfNumbers
 * @param {number[]} arrOfNumbers - the numbers to filter
 * @param {number} lowValue - number to compare against
 * @returns {number[]} the filtered numbers
 */
const findLessThan = (arrOfNumbers, highValue) => {
  if (!Array.isArray(arrOfNumbers)) {
    throw new TypeError('first parameter must be an array');
  }
  if (!arrOfNumbers.every(entry => typeof entry === 'number')) {
    throw new TypeError('first parameter must contain only numbers')
  }
  if (typeof highValue !== 'number') {
    throw new TypeError('second parameter must be a number');
  }

  // write the logic!
  let arrOfLessThanNumbers =[];
  for(let number of arrOfNumbers){
    if(number < highValue){
      arrOfLessThanNumbers.push(number);
    }
  }
  return arrOfLessThanNumbers;
};




describe('findLessThan: keeps all numbers that are less than a given value', () => {
  describe('correctly filters the array', () => {
    it('returns an empty for an empty array', () => {
      const expected = [];
      const actual = findLessThan([], 100);
      assert.deepStrictEqual(actual, expected);
    });
    it('works when all are less than', () => {
      const expected = [4, 5, 6];
      const actual = findLessThan([4, 5, 6], 7);
      assert.deepStrictEqual(actual, expected);
    });
    it('works when all are greater than', () => {
      const expected = [];
      const actual = findLessThan([4, 5, 6], 3);
      assert.deepStrictEqual(actual, expected);
    });
    it('works when there are both', () => {
      const expected = [4];
      const actual = findLessThan([4, 5, 6], 5);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe('uses the arguments correctly', () => {
    it('does not modify the first parameter', () => {
      const arg = [1, 2, 3, 4];
      findLessThan(arg, 2);
      assert.deepStrictEqual(arg, [1, 2, 3, 4]);
    });
    it('throws an error if the first argument is not an array', () => {
      const shouldThrow = () => findLessThan('hello!');
      assert.throws(shouldThrow, TypeError, 'first parameter must be an array');
    });
    it('throws an error if the first argument contains non-numbers', () => {
      const shouldThrow = () => findLessThan([1, 2, '3', 4,]);
      assert.throws(shouldThrow, TypeError, 'first parameter must contain only numbers');
    });
    it('throws an error if the second argument is not a number', () => {
      const shouldThrow = () => findLessThan([1, 2, 3, 4,], '4');
      assert.throws(shouldThrow, TypeError, 'second parameter must be a number');
    });
  });
});



const findLessThanHandler = () => {
  console.log('\n--- calling: find less than handler');
  console.log('numbers:', typeof numbers, '\n', numbers);

  const userInput = prompt('please enter number to return the number less than current');
  console.log('userInput:', typeof userInput, '\n', userInput);
  if (userInput === null || userInput === '') {
    return;
  }

  const userNumber = Number(userInput);
  console.log('userNumber:', typeof userNumber, '\n', userNumber);
  if (userInput.isNaN(userNumber)) {
    alert(`${userInput} is not a valid number`);
    return;
  }

  const filteredNumbers = findLessThan(numbers,userNumber);
  console.log('filteredNumbers:', typeof filteredNumbers, '\n', filteredNumbers);

  displayArrayHandler(filteredNumbers, `numbers less than ${userNumber}`);
};
