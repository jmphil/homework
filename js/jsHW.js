//Algo #1
// Without using .flat(), create a function to flatten an array 
// const main = [1,2,[3,4, [5,6,7], 8], 9, 10]
//  flatten(exampleArray) [1,2,3,4,5,6,7,8,9,10]
// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const flat2 = main.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);
// console.log(flat2);

// const flat = data.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);
// console.log(flat);

// const flat = main.reduce(function(total, amount){

//     return total.concat(amount);

// }); 

// console.log(flat);
// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

//filter
// var arr = [1, -3, -5, 8, 0, 10, -33, 55, 66,] 

// var newArr = arr.filter(function(num){
    
//     return num < 0

// })
// console.log(newArr);

// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

//.filter
// var arr = [1, 3, 5, 8, 0, 10, 33, 55, 66,] 

// var newArr = arr.filter(function(num){  
//     return num%2 == 0 

// })

// console.log(newArr);


//.map
// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// var arr = [2, 5, 20, 56]

// var calc = arr.map(function(num){   

//     return num ** 2 

// })
// console.log(calc);


//Cities return cities with temps cooler that 70F
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var temp = cities.filter(function(num){
    
//     return num.temperature < 70

// })

// console.log(temp);

//Cities2
// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];
// var empty = []
// var newName = cities.forEach(function(obj){

//     empty.push(obj.name);

// })
// console.log(empty);
//Good Job!
//Print out 'Good Job, !' for each person's name, one on a line.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var greeting = people.map(function(people){


//     return `Good Job, ${people}!`
        
    
// })

// console.log(greeting);

// Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var newP = people.sort()

// console.log(people.sort)


// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.


// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var newPeep = people.sort(function(a, b){
//     return a.length - b.length;
// })
// console.log(newPeep);

// Sort an array, 3
// Given an array of array of numbers like:

// var arr = [[1, 3, 4][2, 4, 6, 8] [3, 6] ];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [ [1, 3, 4][3, 6][2, 4, 6, 8] ]

//12  Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

var arr = [1, 4, 8, 15]

var newArr = arr.reduce(function(total, num){
    return total + num;
})

console.log(newArr);

//13. Acronym 
// var obj = ['hard', 'work', 'pays', 'off']

// var Acronym = obj.reduce(function(a, b, c, d){
    
    
// })

// console.log(Acronym);
