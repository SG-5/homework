//1. Use array methods to turn data into result

let data = [
  ["The","red", "horse"],
  ["Plane","over","the","ocean"],
  ["Chocolate","ice","cream","is","awesome"], 
  ["this","is","a","long","sentence"]
]

function groupeWords(array) {
  return array.map(item=> item.join(' ') )
}

console.log(groupeWords(data))
 

// Result
// ['The red horse',
// 'Plane over the ocean',
// 'Chocolate ice cream is awesome',
// 'this is a long sentence'];


2. //Create a constructor function to produce calculator instances (+,-,*,? operations).




//3. Remove duplicates in an array.

let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDups(arr) {
  
  unique = arr.filter((item, pos)=> {
    return arr.indexOf(item) == pos;
})
  return unique
};

console.log( removeDups(dupes))

//result => [1,2,3,’a’, ‘f’, 4, ‘d’];

//4. Groupe by property

let arr = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
];

function groupe(arr, prop) {
  arr.reduce((prev, item){
    if (prev.country=prop) {
      prev=
    }

  },{})
} 
console.log(groupe(arr, 'US'))
 
//result => {
// 	AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
// 	US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'}],
// …… 
// }
