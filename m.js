/*Using Arrays | Lesson 5 
Practice: Array Iterator Methods 
Instructions 
Complete each of the following tasks by writing code to manipulate the provided 
arrays. Your solution should only use the array methods covered in the lesson: 
push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(), 
concat(), slice(), splice(), sort(), and reverse(). Submit the final version of 
the arrays as specified after each task. 
Instructions 
Task 1: Using forEach() 
1. Create an array of five of your favorite cities. 


2. Use forEach( ) to log each city name to the console in uppercase. 
3. Submit the output format by adding comments to the code. 
Task 2: Transforming with map() 
1. Create an array called numbers with the numbers 1-5. 

2. Use map( ) to create an array where each number is squared. Call this array 
squares. 
3. Log the new array.  
4. Submit the output by adding comments to the code. 
Task 3: Filtering with filter() 
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 
100. 





console.log(bigScores);
2. Use filter ( ) to create a new array containing only the scores greater than or 
equal to 80. Call this array highScores. 
3. Log the new array. 
4. Submit the output by adding comments to the code. 
1 
Task 4: Finding with find() and findIndex() 
1. Create an array called favoriteFood that contains a list of your favorite 
dishes. Try to add 5 or 6 elements. 


2. Use find() to locate the first food with more than 4 letters. 
3. Use findIndex( ) to find the index of that fruit. */


//task 1
//updated to reflect assignment requirement of uppercase
let fav = ["Tokyo", "London", "Paris", "New York", "Hollywood"];
fav.forEach((word) => {
   console.log(word.toUpperCase()); 
});
/*outputs Tokyo
London
Paris
New York
Hollywood*/

//task 2
//I cannot get this to run
//update, solved issue by removing semicolon and adjusting callback

let numbers = [1, 2, 3, 4, 5]
let square = numbers.map(num => num * num);

console.log(square);


//task 3



let scores = [85, 42, 90, 75, 30, 100];

let bigScores = scores.filter(num => num >= 80);

console.log(bigScores);

//[85, 90, 100]

//task 4
//updated to add console.log for findIndex per assignment tasks

favoriteFood = ["cheese sandwich", "bread sandwich", "pickle sandwich", "sandwich sandwich", "toast sandwich"];
let fourLetterFood = favoriteFood.find((moreThanFour) => moreThanFour.length > 4);
let fourIndex = favoriteFood.findIndex(food => food.length > 4);

console.log(fourLetterFood);
console.log(fourIndex);
