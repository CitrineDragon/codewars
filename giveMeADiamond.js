// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n % 2 === 0 || n < null || n === null) return null;
  let after = [];
  let str = '';
  for (let i = 1; i <= n; i += 2) {
    if (i !== n) {
      str += `${' '.repeat((n - i) / 2)}${'*'.repeat(i)}\n`;
      after.push(`${' '.repeat((n - i) / 2)}${'*'.repeat(i)}\n`);
    } else {
      str += `${' '.repeat((n - i) / 2)}${'*'.repeat(i)}\n`;
    }
  }
  return str.concat(after.reverse().join(''));
}