/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jt,gl,pn,nc){
return `You will be a ${jt} in ${gl}, and married to ${pn} with ${nc} kids.`
}
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3))
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
    return `Your doggie is ${age*7} years old in dog years!`
}
console.log(calculateDogAge(1))
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// 
function calculateSupply(age, amountPerDay){
    let a=100-age;
    let amount=amountPerDay*a*365
    return amount;
}
console.log(calculateSupply(30,3))
/*

4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
return `hello ${name}`
}
console.log(greet('Razan'))
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}*/
function double(cat) {
  return 2 * cat;
}
function double(x=7) {
  return 2 * 7;
}

function double(x='7') {
  return 2 * x;
}




/*
6
fix these functions:*/
function double1(x) {
  return 2 * x ;
}


function double2 (x){
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(number){
    return number**3
}
console.log(cube(4))
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x,y){
    return x*y
}
console.log(multiply(3,4))

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
    if(age>=20){
        return "yes you can"
    }
    else {return `please come back after ${20-age} years to get one`}
}
console.log(canIGetADrivingLicense(19));
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(x,y){
    if(x.length===y.length){
        return true
    }
    else return false
}
console.log(sameLength('tree','car'))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(x,y){
  if(x>y){
    return x
  }
  else return y
}
console.log(largerNubmer(4,5))
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(x,y,z){
    if(x<y&&x<z){
        return x
    }
    else if(y<x&&y<z){
        return y
    }
    else {return z}
}
console.log(smallerNubmer(10,9,8))
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(...strings){
    let min=strings[0];
    for(let i=0;i<strings.length;i++){
        if(min.length>strings[i].length){
            min=strings[i]
            
        }



    }
    return min;
}
console.log( shorterString("air","by","car","github","tr"))
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function LongerString(...strings){
    let max=strings[0];
    for(let i=0;i<strings.length;i++){
        if(max.length<strings[i].length){
            max=strings[i]
        }



    }
    return max;
}
console.log( LongerString("air","by","car","github","tr"))
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x){
    if(x%2==0){
        return true
    }
    else return false
}
console.log(isEven(3))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(x){
    if(x%2!=0){
        return true
    }
    else return false
}
console.log(isOdd(3))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(x){
    if(x<0){
        return x*-1
    }
    else return x
}
console.log(positive(-5))
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fn,ln){
    return fn+" "+ln
}
console.log(fullName("Razan","Rjoub"))
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(...numbers){
    let sum=0;
    let avg=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]


    }
    return sum/numbers.length
}
console.log(average(1,2,3,4,5))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
    return (Math.random() * (1 - 0) ) + 0;
}
console.log(randomNumber())
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(x,y){
   if(x<y){
    return (Math.random() * (y - x) ) +x;
   } 
   else  return (Math.random() * (x - y) ) +y;
}
console.log(randomBetweenNumbers(1,8))
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(grade){
    
switch(true){
    case grade<50: return("Fail");
    break;
    case grade>=60&& grade<69: return("E");
    break;
    case grade>=70&& grade<79:return ("D");
    break;
    case grade>=80&& grade<89: return("B");
    break;
    default: return("A")
    }
}
console.log(scoreInUniversty(90))
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
 let x=0; 
function counter(){
  return ++x;
}

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
    return --x;
}
console.log(resetCounter())
console.log(resetCounter())
console.log(resetCounter())
console.log(resetCounter())