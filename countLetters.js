const countLetters = letters => {
    const results = {};
    lettersTrimmed = letters.replace(
        / /g,
        ""
    );
    for (const letter of lettersTrimmed) {      
        if (results[letter]) {
            results[letter] += 1;
        } else {results[letter] = 1}
    }
    return(results);
}

console.log(countLetters("Lighthouse in the house"));


const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✔✔✔  Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
    }
  };



