const validate = (array) => {
  // send always comes before response
  // counterpart should be in the array (both the number and the letter)
  // create storge object
  // loop through array
  // split array, store with key as index and value as split array
  const storage = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === 'S') {
      storage[array[i][1]] = array[i][0];
    }
    if (!(array[i][1] in storage)) {
      return false;
    }
  }

  return true;
};

// valid
console.log(validate(['S1', 'R1']));
// invalid
console.log(validate(['S2', 'R1']));
// valid
console.log(validate(['S1', 'R1', 'S2']));
