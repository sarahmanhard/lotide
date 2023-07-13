

const without = function(source, itemsToRemove) { //without function takes in a course array and an intemsToRemove array
  let result = [];

  for (let i = 0; i < source.length; i++) { // each element is checked if it it present in the items to remove array using for loop
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]); // if an element is not found it is added to the result using thr push method
    }
  }
  return result; //return result only contains elements from the source array that are not present in the itemsToRemove array
};

module.exports = without;