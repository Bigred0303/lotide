const countLetters = letters => {
  const results = {};
  const lettersTrimmed = letters.replace(
    / /g,
    ""
  );
  for (const letter of lettersTrimmed) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return (results);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = countLetters('Lighthouse in the house');
assertEqual(result['L'], 1);
assertEqual(result['i'], 2);
assertEqual(result['h'], 4);





