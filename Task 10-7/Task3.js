// 1. Write a JS code to print numbers from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i)
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
console.log('\n \n')
var arr = [13,23,12,45,22,48,66,100]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]) 
    }
}
/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
let p="";
for(let i=1;i<9;i++){
    
    for(let j=1;j<=i;j++){
        
   p+=j;
       
    }
   p+=' \n'
  
    
}
 console.log(p)

//  let p="";
// for(let i=1;i<9;i++){
    
//     for(let j=1;j<=i;j++){
        
//    p+=j;
   
//     }
//    p+=`<br>` 
  
    
// }document.write(p) 
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let word='don’t know why'


  
if(word.includes('y')){
    console.log('yes') 
    
}
else{console.log('no')}
