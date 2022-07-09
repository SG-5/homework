// 1) Make an array of numbers that are doubles of the first array

// function DoubleNumbers(arr) {
//     const double= arr.map(item => item*2)
//     return double
// }

// console.log(DoubleNumbers([2,5,100]))

//========================

// 2) Take an array of numbers and make them strings

// function stringItUP(arr) {
//    const str=arr.map(item => item.toString())
//    return str
// }

// console.log(stringItUP([2,5,100]))

//========================

// 3) Capitalize each of an array of names

//   function capitalizeNames(arr) {
//     let names=[]
//     for (let key of arr) {
//         key = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
//         names.push(key)
//     }
//       return names
//      }

//      console.log(capitalizeNames(['john','JACOB','jinGleHeimer','schmidt']) )

//========================

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

// 4) Make an array of strings of the names

// function namesOnly(arr) {
// 	const names = arr.map((item) => item.name)
// 	return names
// }
// console.log(namesOnly(people))

//========================

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){
// 	const names = arr.map(item=>{
//   return (item.age>=18) ? `${item.name} can go to The Matrix`:`${item.name} is under age!!`
//    })
// 	 	return names
// }
// console.log(makeStrings(people))

//========================

// 6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// const input = [ 1, -4, 12, 0, -3, 29, -150]

// function sum(arr) {
// 	const total= arr.filter(item => item>0 ).reduce((prev,current) =>prev+=current,0)
// 	return total
//  }
//  console.log(sum(input))

//========================

// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input7 = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ]

// function differenceAge(arr) {

// 	const difference=arr.map(item=>item.age).reduce((previous, current) => {
//         previous[0]=(previous[0] === undefined || current < previous[0] ) ? current :previous[0]
//     	previous[1] = (previous[1] === undefined || current > previous[1] ) ? current :previous[1]
// 		previous[2]=previous[1]-previous[0]
//         return previous;
//     }, [])

// return difference
//  }
//  console.log(differenceAge(input7))

//========================

// 8 )
//Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.

// function count(arr) {
//     const counts = {};
//     const arr1d = [].concat.apply([],arr).forEach(element => {
//         counts[element] = counts[element] ? counts[element] + 1 : 1;
//     });
// return counts
//  }

// const input8 = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
// ];

// console.log(count(input8));

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

nums = [3, 2, 3]

// function majority(arr) {

// }
//  console.log(majority(nums))
