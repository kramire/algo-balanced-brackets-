// Balanced parentheses (20 mins)

// CHALLENGE

// Write a function called `balanced` that accepts
// 1 string with only 6 valid cahracters ({}[]()). The function
// should return true or false if the string has blanaced characters
// e.g. `balanced('((({}[])))') ===> true`
// Consider all brackets, parenthesis and curly braces should be i order
// For example '(}{)' This should return false but '({})' should return true

// EXAMPLES

// balanced('()') => true
// balanced('()(') => false
// balanced('()()') => true
// balanced('({})') => true
// balanced('(([{}]{}))) => true
// balanced('{}[](}{})') => false

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.

const balanced = str => {
  // your code here. Enjoy the music.

  let dict = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  if (str.length % 2 === 1 || !(str[0] in dict)) return false;

  let temp = [];
  let counter = 0;

  for (let i=0; i<(str.length/2 - 1); i++) {
    if (str[i] in dict) {
      let opp = dict[str[i]];
      temp.unshift(opp)
      counter++;
    }
    else {
      if (str[i] !== temp.shift()) return false;
    }
  }

  return true;

};

module.exports = balanced;
