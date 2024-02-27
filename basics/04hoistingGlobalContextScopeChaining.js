//learning points: functional declarations are scanned and are made available
//learning points: variable declarations are scanned and are made undefined
//A variable object is a special object associated with the context and which stores variables and function declarations are being defined within the context.
//A variable object is an abstract concept.

//variable hoisting
function hoistingVariableExample(){

    console.log(`logging the variable value before declaration: ${hoist}`);
    var hoist = "I am hoisted";

    console.log(`logging the variable value after declaraction and initialization: ${hoist}`);
}

//function hoisting
function hoistingFunctionExample(){
    console.log(`Result of an add function before declaration: `, add(3,7));

    function add(x,y){
        return x + y;
    }
}

hoistingVariableExample();
hoistingFunctionExample();


//scope chaining
//learning points: javascript can drill as much as possible in bottom to top approach - to find the values of variable
//learning points: uncomment the chaining variable to assess different use cases
var chaining = "dawood";
console.log(`User name is: ${chaining}`);

function drillingUp(){
    //var chaining = "d"
    console.log(`drilling and found: ${chaining}`);

    drillingUpUp();

    function drillingUpUp(){
        //var chaining = "MD"
        console.log(`drilling and found: ${chaining}`);
    }
}

drillingUp();
