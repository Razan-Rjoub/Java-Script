/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(arr) {
    const arr2 = [];
    arr.forEach(element => {
        arr2.push(element * 2)
    });
    return arr2;
}

// Test Cases
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));
/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr) {
    const arr2 = [];
    arr.forEach((element) => {
        if (element % 2 == 0)
            arr2.push(element)
    })
    console.log(arr2)
}
onlyEvenValues([1, 2, 3])
onlyEvenValues([5, 1, 2, 3, 10])
/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
function showFirstAndLast(arr) {
    const arr2 = [];
    arr.forEach(element => {
        element.charAt(0) + element.charAt(element.length - 1)
    });
    console.log(arr);
}
showFirstAndLast(['colt', 'matt', 'tim', 'udemy'])
showFirstAndLast(['hi', 'goodbye', 'smile'])
/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
function addKeyAndValue(arr, key, value) {

    arr.forEach(element => {
        element[key] = value;
    });
    console.log(arr);
}
addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor')
/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

function vowelCount(str) {
    const arr = str.split('');
    var counti = 0;
    var counte=0;
    var counto=0;
    var counta=0;
    var countu=0;
    arr2={};
    arr.forEach((element) => {
        if (element.includes('i')|| element.includes('I')) {
            ++counti;
            arr2['i'] = counti;
        }
        if(element.includes('e')||element.includes('E')){
            ++counte;
            arr2['e'] = counte;
        }
        if(element.includes('o')||element.includes('O')){
            ++counto;
            arr2['o']=counto

        }
        if(element.includes('A')||element.includes('a')){
            ++counta;
            arr2['a']=counta

        }
        if(element.includes('u')||element.includes('U')){
            ++countu;
            arr2['u']=countu

        }

    })
    console.log(arr2)
}
vowelCount('Elie') // {e:2,i:1};
 vowelCount('Tim') // {i:1};
  vowelCount('Matt') // {a:1})
  vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you')