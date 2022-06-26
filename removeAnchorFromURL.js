// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  let arr = url.split('#');
  return arr[0];
}
