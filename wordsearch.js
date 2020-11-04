const wordSearch = (letters, word) => {
    const reversed = word.split("").reverse().join("");
    if (!letters || !word || letters.length <= 0) {
      return false;
    } else {
      const horizontalJoin = letters.map((ls) => ls.join(""));
      for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reversed)) return true;
      }
      for (let i = 0; i < letters[0].length; i++) {
        let verticalJoin = letters.map((x) => x[i]);
        verticalJoin = verticalJoin.join("");
        if (verticalJoin.includes(word) || verticalJoin.includes(reversed)) {
          return true;
        }
      }
      return false;
    }
  };
  
  module.exports = wordSearch;
  