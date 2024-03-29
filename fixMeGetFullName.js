// https://www.codewars.com/kata/597c684822bc9388f600010f/train/javascript

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.

// class Dinglemouse {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     if (this.firstName === '' && this.lastName === '') {
//       return '';
//     } else if (this.firstName === '') {
//       return `${this.lastName}`;
//     } else if (this.lastName === '') {
//       return `${this.firstName}`;
//     } else {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
// }

class Dinglemouse {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  getFullName() {
    return `${this.first} ${this.last}`.trim();
  }
}
