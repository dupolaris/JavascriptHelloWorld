// Falsy values are: undefiend , Null , Nan , 0 , ''
// Truthy values are: other than the above listed
//learning points: coersion , falsy and truthy values , functions , functional programming approaches

//The boolean value false is already explicitly provided. No coercion occurs here

var test1 = 0;
var test2 = "hello world";
var test3 = null;
var test4 = undefined;
var test5 = false;

//function to check the truthy and falsy values
function checkTruthyFalsy(value) {
    if (value) {
        console.log(`${value} is truthy.`);
    }
    else console.log(`${value} is falsy.`);
}

checkTruthyFalsy(test1);
checkTruthyFalsy(test2);
checkTruthyFalsy(test3);
checkTruthyFalsy(test4);
//The boolean value false is already explicitly provided. No coercion occurs here
checkTruthyFalsy(test5);




//functional programming example
//learning point: what will happen if return of function is not stored and function is called?
function funcProgHello(name) {
    return `Hello my friend ${name}`;
}

//storing return value in a variable to process it further
var greetings = funcProgHello("dawood");
greetings = `${greetings}, Hope you are well.`;
console.log(greetings);

//other apprach
console.log(funcProgHello("suleman"));