// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

// More in this series:

// The Office I - Outed
// The Office II - Boredeom Score
// The Office III - Broken Photocopier
// The Office V - Find a Chair

// function meeting(x) {
//   return x.indexOf('O') === -1 ? 'None available!' : x.indexOf('O');
// }

function meeting(x) {
  const index = x.indexOf('O');
  return index === -1 ? 'None available!' : index;
}
