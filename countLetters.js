const countLetters = function(letters) {
  const result = {};
  const newString = letters.split(" ").join("");
  for (const letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1
    }
  }
  return result;
};

module.exports = countLetters;