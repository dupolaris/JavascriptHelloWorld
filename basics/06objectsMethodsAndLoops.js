//learning points: objects - methods syntax in objects - this keyword refering to current object
//for loop : (classic loop) when you want to loop the elements via index
//for of : When you want to loop through the values of an iterable (arrays, strings etc)
//for in : When you want to loop through the enumerable properties of an object (iterating the object properties)
//forEach : When you want to perform an operation on each element of an array (example of a callback function)

//creating object
let person = {

    firstName: "Muhammad",
    lastName: "Dawood",
    age: 24,
    hobbies: ["chess" , "gaming" , "walking"],
    games: ["Call of Duty" , "Forza Horizon" , "Stronghold Crusader"],

    hobbyGreeting: function (){
        console.log(`Hobbies of ${this.firstName} ${this.lastName} are:`);
        //using for of loop
        for (let hobby of this.hobbies){
            console.log(`> ${hobby}`);
        }
    },

    birthdayWish: function(){
        this.age++;
        console.log(`Happy Birthday ${this.lastName} !`);
    },

};

//calling methods of the objects
person.birthdayWish();
person.hobbyGreeting();


//for in loop to iterate through object properties
console.log(`Properties and methods of the person object:`);
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}