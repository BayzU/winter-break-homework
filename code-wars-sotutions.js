// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//1 Multiples of 3 or 5

/*
Step 1: Create a sum variable which stores the sum of numbers while iterating over the multiples
Step 2: Check if the number is negative, if it is then return 0
Step 3: Iterate over the number and if there is a multiple(if it is divisible by 3 or 5) then add it to sum
Step 4: Return sum
*/

function solution(number){
  let sum = 0;
  if (Math.sign(number) == -1) {
    return 0;
  } else {
    for (let i = 0; i < number; i++){
      if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
  }
  return sum;
}

//2 Who likes it?

/*
Step 1: Create an if else statement that returns `no one likes this` if names is an empty array
Step 2: returns the name of the person followed by `likes this` if the names array contains one name
Step 3: Returns a name + and + name likes this if the names array contains two elements
Step 4: Returns name,name + and + name if the names array contains 3 elements.
Step 5: Returns name, name + and number of other people(length of names array - 2) besides the first two elements, who likes it.  
*/

function likes(names) {
  if (names.length < 1) return `no one likes this`; //for []
  else if (names.length === 1) return `${names[0]} likes this`; //for 1 person
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`; //for 2 people
  else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`; //for 3 people
  else if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; // for 3 or more people
}

//3 Find the unique number

/*
Step 1: The unique number will have the same first and last index(as it is unique). We can use .filter to iterate over the array
Step 2: We can check if the the first and last index is the same
Step 3: If the indexes are the same then we can return the unique number by accessing the only element of the filtered array
*/

function findUniq(arr) {
  return arr.filter(element=>{
     return arr.indexOf(element) === arr.lastIndexOf(element);
  })[0];
}

//4 Find the parity outlier

/*
Step 1: Create two empty varibales called even and odd to seperate even and odd values
Step 2: Check if a number is odd or even by iterating over the array and dividing it by 2
Step 3: Use and if else sattement to push even numbers in the even variable and odd numbers in the odd variable
Step 4: Return whichever array(even or odd) has only one element
*/

function findOutlier(integers){
  
  const even = [];
  const odd = [];
  
  integers.map (element => {
    if (element % 2 == 0) even.push(element);
    else odd.push(element);
  });
  
  if (even.length == 1) return even[0];
  else return odd[0];
}

//5 Counting Duplicates

/*
Step 1: Create and emppty object to store values and an empty variable to store the result value
Step 2: Turn all the text to lowercase to avoid case sensitivity
Step 3: Split the text into each letter so  that we can iterate over it
Step 4: Create and if else statement that adds a letter to the object with a count fo 1 if it doesnt exist in the obj and if it does exist then add 1 to the count
Step 5: Push whichever object property has a count greater than 1 then push it to the result array
Step 6: Return the length of the result array
*/

function duplicateCount(text){
  
  let obj ={};
  let result = [];
  
  text.toLowerCase().split('').forEach(element => {
    if (obj[element]) obj[element] += 1;
    else obj[element] = 1;
  });
  
  for (const property in obj) {
    if (obj[property] > 1) result.push(property);
  }
  
  return result.length;
}

//6 Moving Zeros To The End

/*
Step 1: Create and empty array called result
Step 2: Create another variable called zeros which stores just the zeros filtered from the array
Step 3: Iterate over the array and push each element to the result array
Step 4: Concat the result array with the zeros array so that the zeros add add the end
*/

function moveZeros(arr) {
  let result = [];
  let zeros = arr.filter(element => element === 0);
  
  arr.map(element => {
    if (element !== 0) result.push(element);
  });
  
 return result.concat(zeros)
}

//7 Simple Pig Latin 

/*
Step 1: Split the words by spaces and store it in a variable called words
Step 2: Create an empt y array called results.
Step 3: use forEach to iterate over each word
Step 4: Create an if else statement that checks if a word is made of letter and if it does then push the letters of the word starting from the second letter to the result array and add the first letter at the end along with 'ay'
Step 5: if it is not letter then push the element to the result array
Step 6: Join the result array by spaces and the nreturn it
*/

function pigIt(str){
  let words = str.split(' ');
  let result = [];
  
  words.forEach(element => {
    if (element.match(/[a-z]/gi)) result.push(element.substring(1) + element[0] + 'ay');
    else result.push(element);
  });
  return result.join(' ');
}

