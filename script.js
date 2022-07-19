// // 1) Make an array of numbers that are doubles of the first array
function DoubleNumbers(arr) {
  const double = arr.map((item) => item * 2)
  return double
}

console.log(DoubleNumbers([2, 5, 100]))

// //========================

// 2) Take an array of numbers and make them strings

function stringItUP(arr) {
  const str = arr.map((item) => item.toString())
  return str
}

console.log(stringItUP([2, 5, 100]))

// //========================

// // 3) Capitalize each of an array of names

function capitalizeNames(arr) {
  let names = []
  for (let key of arr) {
    key = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    names.push(key)
  }
  return names
}

console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']))

// //========================

const people = [
  {
    name: 'Angelina Jolie',
    age: 80,
  },
  {
    name: 'Eric Jones',
    age: 2,
  },
  {
    name: 'Paris Hilton',
    age: 5,
  },
  {
    name: 'Kayne West',
    age: 16,
  },
  {
    name: 'Bob Ziroll',
    age: 100,
  },
]

// // 4) Make an array of strings of the names

function namesOnly(arr) {
  const names = arr.map((item) => item.name)
  return names
}
console.log(namesOnly(people))

// //========================

// // 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
  const names = arr.map((item) => {
    return item.age >= 18 ? `${item.name} can go to The Matrix` : `${item.name} is under age!!`
  })
  return names
}
console.log(makeStrings(people))

// //========================

// // 6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150]

function sum(arr) {
  const total = arr.filter((item) => item > 0).reduce((prev, current) => (prev += current), 0)
  return total
}
console.log(sum(input))

// //========================

// // 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input7 = [
  {
    name: 'John',
    age: 13,
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  },
]

function differenceAge(arr) {
  const difference = arr
    .map((item) => item.age)
    .reduce((previous, current) => {
      previous[0] = previous[0] === undefined || current < previous[0] ? current : previous[0]
      previous[1] = previous[1] === undefined || current > previous[1] ? current : previous[1]
      previous[2] = previous[1] - previous[0]
      return previous
    }, [])

  return difference
}
console.log(differenceAge(input7))

// //========================

// // 8 )
// //Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// // the elements of which are arrays of strings. The result is an object whose
// // property names are the values from the arrays and their value is the number of their occurrences.

function count(arr) {
  const counts = {}
  const arr1d = [].concat.apply([], arr).forEach((element) => {
    counts[element] = counts[element] ? counts[element] + 1 : 1
  })
  return counts
}

const input8 = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
]

console.log(count(input8))

//========================

// 9)

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times
// nums = [2, 2, 1, 1, 1, 2, 2]

const num = [2, 2, 1, 1, 1, 2, 2]
function majority(arr) {
  const majority = Math.round(arr.length / 2)
  const result = arr.reduce((prev, item) => {
    prev[item] = (prev[item] || 0) + 1
    if (prev[item] == majority) {
      prev = item
    }
    return prev
  }, {})
  return result
}
console.log(majority(num))

//========================

// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

const nums = [5, 5, 5, 5, 5, 2, 4, 2, 2, 7, 7, 7]
function repeated(arr) {
  let result = arr.reduce((prev, item) => {
    prev[item] = (prev[item] || 0) + 1
    return prev
  }, {})

  // let thirdValue = []
  let thirdValue = 0
  const propertyValue = Object.values(result).sort((a, b) => b - a)[2]
  for (const key in result) {
    if (result[key] === propertyValue) {
      thirdValue = key
      // thirdValue = push(key)
    }
  }
  return thirdValue
}
console.log(repeated(nums))

//========================

// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.

function Prefix(s, words) {
  let str = ''
  for (let key of words) {
    str = str + key
    //console.log(key)
    if (s === str) {
      return true
    }
  }
  console.log(str)
  return false
}
console.log(Prefix('iloveleetcode', ['i', 'love', 'leetcode', 'apples']))

//========================

// 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object

///
const phoneCountryCodes = {
  '+374': 'Armenia',
  '+375': 'Somali',
  '+376': 'Russia',
  '+377': 'Hoktemberyan',
}

const arrOfObjects = [
  {
    name: 'sarah',
    age: 32,
    phoneNumber: '+374000000',
    relation: 'nelly',
  },
  {
    name: 'nelly',
    age: 11,
    phoneNumber: '+3750020000',
    relation: 'sarah',
  },
]

const referancetoSarahObject = arrOfObjects[0]
const referanceToNellyObject = arrOfObjects[1]

function userInfo(obj, phone) {
  for (const key in obj) {
    const elem = obj[key]
    elem.name = elem.name.toUpperCase()
    obj[0].relation = referancetoSarahObject
    obj[1].relation = referanceToNellyObject
    for (const code in phone) {
      const countryName = phone[code]
      if (elem.phoneNumber.includes(code)) {
        elem.country = countryName
      }
    }
  }

  return obj
}

console.log(userInfo(arrOfObjects, phoneCountryCodes))

// You will need to return

// const arrOfObjects = [

//   {
//       name: 'SARAH',
//       age: 32,
//       phoneNumber: '+374000000',
//       country: 'Armenia',
//       relation: referancetoSarahObject,
//   },
//   {
//       name: 'NELLY',
//       age: 11,
//       phoneNumber: '+3750020000',
//       country: 'Somali',
//       relation: referanceToNellyObject,

//   }
// ];
