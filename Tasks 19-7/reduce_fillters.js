console.log("Here is : ", "Reduce & Filter");

//Using Reduce 1 -5
var persons = [
    { name: { first: "John", last: "Hob" }, age: 35 },
    { name: { first: "Alex", last: "Mercer" }, age: 25 },
    { name: { first: "Alice", last: "Zaheer" }, age: 24 },
    { name: { first: "Zues", last: "Odin" }, age: 55 },
    { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge(person) {
    const sumResult = persons.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.age / persons.length,
        0
    );
    return sumResult;
}
console.log(avgAge(persons));
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(person) {
    const longestname = persons.reduce((accumulator, currentValue) => {
        const fullName = currentValue.name.first + " " + currentValue.name.last;
        if (fullName.length > accumulator.length) {
            return fullName;
        } else return accumulator;
    }, persons);
    return longestname;
}
console.log(longestName(persons));
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(numbers) {
    const maxnumber = numbers.reduce((accumulator, currentValue) => {
        if (currentValue > accumulator) {
            return currentValue;
        } else {
            return accumulator;
        }
    }, 0);
    return maxnumber;
}
console.log(maxNumber([1, 2, 9, 5, 8, 10]));
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
var count = 0;
function repeatChar(text, letter) {

    var arraytext = text.split('');
    arraytext.reduce((accumulator, currentValue) => {
        if (currentValue == letter) {
            return ++count;

        }
        else {
            return accumulator;
        }
    }, 0);
    return count;
}
console.log(repeatChar('Hello World', 'W'))
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs(number1, number2) {
    let array = [number1];
    array.reduce((accumulator, currentValue) => {
        
            for(accumulator=currentValue+1;accumulator<=number2;accumulator++)
            array.push(accumulator) 
        console.log(array);
        
    }, 0)
}
usAndNumberBeetweenUs(2, 10)

//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(numbers) {
    const even = numbers.filter((number) => number % 2 == 0)
    console.log(even);
}
evenOnly([1, 8, 6, 4, 3, 2])
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(numbers) {
    const mutiply = numbers.filter((number) => number % 4 == 0)
    console.log(mutiply);
}
multiFour([1, 8, 6, 4, 12])
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(array, char) {
    const contain = array.filter((letter) => letter.includes(char))
    console.log(contain);
}
containChar(["hello", "world"], 'w')
containChar(["hello", "world"], 'l')
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(strings) {
    const evenlength = strings.filter((string) => string.length % 2 == 1 && strings.indexOf(string) % 2 == 0)
    console.log(evenlength);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
evenIndexOddLength(strings)
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(person, Age) {
    const older = person.filter((p) => p.age > Age)
    console.log(older);
}
olderThan(persons, 56)
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(strings, number) {
    const shorter = strings.filter((string) => string.length < number)
    console.log(shorter);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
shorterThan(strings, 5)
// if you finish the exercises review the material of the week and help your classmate
