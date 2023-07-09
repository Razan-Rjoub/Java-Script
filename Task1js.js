/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
console.log("Question1");
let zakat = (250 * 2.5) / 100;
console.log(zakat);

console.log("Question2");
let arr1 = [1, 7, 9, 45];
console.log(arr1);
let arr2 = ["str", "alex", "moh"];
console.log(arr2);
let arr3 = ["the", "fox", "over", "Lazy", "dog"];
console.log(arr3);

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
console.log("Question3");
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf("Tomato"));
console.log(fruits.indexOf("Banana"));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

console.log("Question4");
let arrayFood = ["pizza", "maqloba"];
let arraySport = ["ruuning", "swimming", "riding"];
let arrayMovie = ["prison break", "breaking bad"];
console.log(arrayFood);
console.log(arraySport);
console.log(arrayMovie);
/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log("Question5");
let array = [1, 4, 5];
console.log(array[0]);

let array2 = ["t", "u", "g", "x"];
console.log(array2[0]);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log("Question5");
let array3 = [1, 4, 5];
console.log(array3[array3.length - 1]);

let array4 = ["t", "u", "g", "x"];
console.log(array4[array4.length - 1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("Question6");
var array5 = [0, 5, 7, 9];
array5.shift();
array5.unshift(1);
array5.pop();
array5.pop();
array5.pop();
array5.push(3);
array5.push(4);
array5.push(6);
array5.push(8);
array5.push(9);
array5.push(10);
console.log(array5);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log("Question7");
var array6 = [0, 5, 7, 9];
array6.shift();
array6.pop();
array6.pop();
array6.push(9);
array6.push(-7);
array6.push(3.5);
console.log(array6);
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
console.log("Question8");
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
let array7 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(array7.sort());
