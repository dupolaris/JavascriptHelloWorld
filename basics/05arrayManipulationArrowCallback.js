//learning points: arrays, how to manipulate arrays, arrow functions and their syntax, callback functions (MDN docs for more learning)
//learning points: shallow copy of an array, inclusive and exclusive argument of callback functions like: slice and splice etc
// learning points: argu argument in arrayManipulation as a prefix - to identify multiple instances from different functions (putting a flag)
function arrayManipulation(identityFlag, callbackArgument){

    let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let otherArray = [3, 8, 9, 10, 34, 33, 67, 9, 12, 29, 56]

    //slicing the array - creates shallow copy
    let slicedArray = originalArray.slice();

    //slicing again
    let sliced2Array = originalArray.slice(2, 5);

    //splicing the array - learn starting index and Delete Count
    //try originalArray with splice callbackfn  and  observe results of filter, map, filled manipulations
    let splicedArray = otherArray.splice(2, 6);

    //filtering the array - to have only even number
    let filteredArray = originalArray.filter( (a) =>  a % 2 === 0 );

    //maping and squaring each value of array
    let mappedArray = originalArray.map( (a) => a ** 2);

    //filling the whole array with 0
    let filledArray = originalArray.fill(0);

    //callback for the results is as follow
    callbackArgument(identityFlag, originalArray, slicedArray, sliced2Array, splicedArray, filteredArray, mappedArray, filledArray);
}


function displayFunction(identityFlag, originalA, slicedA, sliced2A, splicedA, filteredA, mappedA, filledA){
    console.log(`[${identityFlag}] Orginal array: ` , originalA);
    console.log(`[${identityFlag}] Sliced array: ` , slicedA);
    console.log(`Sliced 2nd array: ` , sliced2A);
    console.log(`Spliced array: ` , splicedA);
    console.log(`Filtered array: ` , filteredA);
    console.log(`Mapped array: ` , mappedA);
    console.log(`Filled array: ` , filledA);
}


//invoking arrayManipulation with the displayFunction callback - (used without paranthesis as reference)
//identity flag value passed as a string - to group/identify if there are multiple instances of manipulators
arrayManipulation("Array Manipulation Set 1" , displayFunction);