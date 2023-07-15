/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */

let number1 = 1;
let number2 = 2;
if (number1 > number2) {
  console.log("number 1 larger than number 2");
} else {
  console.log("number 2 larger than number 1");
}

// 2. Write a JavaScript conditional statement to find the sign
//  of product of three numbers. Display an alert box with the
//  specified sign. Go to the editor
// Sample numbers : 3, -7, 2
// Output : The sign is -
/******* Start Your Code *********/

let n1 = 1;
let n2 = 2;
let n3 = -3;
let n4 = n1 * n2 * n3;
if (n4 < 0) {
  alert("The sign is -");
} else {
  alert("+");
}
/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

if (n1 >= n2 && n1 >= n3) {
  if (n2 >= n3) {
    let message = `${n1} ${n2} ${n3}`;
    alert(message);
  }
}
if (n2 >= n1 && n2 >= n3) {
  if (n1 >= n3) {
    let message = `${n2} ${n1} ${n3}`;
    alert(message);
  }
}
if (n3 >= n2 && n1 >= n3) {
  if (n1 >= n2) {
    let message = `${n3} ${n1} ${n2}`;
    alert(message);
  }
}
/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
let arr = [5, -2, -6, 0, 10];
if (
  arr[0] >= arr[1] &&
  arr[0] >= arr[2] &&
  arr[0] >= arr[3] &&
  arr[0] >= arr[4]
) {
  alert(`The largest number is ${arr[0]}`);
} else if (
  arr[1] >= arr[0] &&
  arr[1] >= arr[2] &&
  arr[1] >= arr[3] &&
  arr[1] >= arr[4]
) {
  alert(`The largest number is ${arr[1]}`);
} else if (
  arr[2] >= arr[0] &&
  arr[2] >= arr[1] &&
  arr[2] >= arr[3] &&
  arr[2] >= arr[4]
) {
  alert(`The largest number is ${arr[2]}`);
} else if (
  arr[3] >= arr[0] &&
  arr[3] >= arr[1] &&
  arr[3] >= arr[2] &&
  arr[3] >= arr[4]
) {
  alert(`The largest number is ${arr[3]}`);
} else if (
  arr[4] >= arr[0] &&
  arr[4] >= arr[1] &&
  arr[4] >= arr[3] &&
  arr[4] >= arr[2]
) {
  alert(`The largest number is ${arr[4]}`);
}
/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x = 0;
let y = 1;
if (x > y) {
  alert("Hello World");
} else {
  alert("Goodbye");
}
