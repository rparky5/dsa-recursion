/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length < 1) return "";
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;
  return arr[0] === val || find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  return (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, -1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  function _findIndex(arr, val, i = 0) {
    if (arr.length === i) return -1;
    if (arr[i] === val) return i;
    return _findIndex(arr, val, i + 1);
  }

  return _findIndex(arr, val, 0);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let out = [];

  function _gatherStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        _gatherStrings(obj[key]);
      } else if (typeof obj[key] === "string") {
        out.push(obj[key]);
      }
    }
  }

  _gatherStrings(obj);
  return out;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

  function _binarySearch(arr, val, left = 0, right = arr.length - 1) {
    if (left > right) return false;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return true;
    }
    if (arr[mid] < val) {
      return _binarySearch(arr, val, mid + 1, right);
    } else {
      return _binarySearch(arr, val, left, mid - 1);
    }
  }

  return _binarySearch(arr, val)
}

// while (min <= max) {
//   mid = Math.floor((min + max) / 2);
//   if (arr[mid] === val) {
//     return true;
//   }
//   if (arr[mid] < val) {
//     min = mid + 1;
//   } else {
//     max = mid - 1;
//   }
// }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

  function _binarySearchIndex(arr, val, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] < val) {
      return _binarySearchIndex(arr, val, mid + 1, right);
    } else {
      return _binarySearchIndex(arr, val, left, mid - 1);
    }
  }

  return _binarySearchIndex(arr, val)
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
