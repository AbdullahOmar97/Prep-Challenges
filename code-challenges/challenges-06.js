'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max;

    max = 0;
    if (arr.length === 0) {
        return undefined;
    }

    max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }}

    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum;

    sum = 0;
      
        for (let i = 0; i < arr.length; i++) {
          let element = arr[i];
          if (typeof element === 'number') {
            let numeric = element;
                sum += numeric;
            }
          }

    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{

        var reversedArray = [];
      
        for (var i = arr.length - 1; i >= 0; i--) {
          reversedArray.push(arr[i]);
        }
      
        return reversedArray;
      }

// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};