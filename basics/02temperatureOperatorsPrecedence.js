//learning points: operators precedence , if else statements , better aproaches according to the usecases
//learning pooints: conditional logic with booleans
var temperatureInCelsius = 37;

if (temperatureInCelsius <= 0) {
    console.log("Happy snowfall weather.")
}
else if (temperatureInCelsius > 0 && temperatureInCelsius <= 15) {
    console.log("Happy cold weather");
}
else if (temperatureInCelsius > 15 && temperatureInCelsius <= 30) {
    console.log("Happy sweet weather");
}
else if (temperatureInCelsius > 30 && temperatureInCelsius <= 40) {
    console.log("Happy summer");
}
else if (temperatureInCelsius > 40) {
    console.log("Be safe from summer heat waves");
}
else console.log("learn operator precedence number from mozilla developer network - MDN");

//learning point: how to write formulas or calculations with proper precedence
var temperatureInCelsiusToFarhenheit = (temperatureInCelsius * 9 / 5) + 32;

console.log(`${temperatureInCelsius} degree Celsius is equal to:  ${temperatureInCelsiusToFarhenheit} Farhenheiht.`);




//learning point: when to use switchs in place of if else conditioning
//learning point: in what use cases switch and if else conditioning should be choosen
var designation = "admin";

switch (designation) {
    case "admin": {
        console.log("You have all the access");
    }
        break;
    case "student": {
        console.log("You have limited access");
    }
        break;
    case "guest": {
        console.log("You can only view limited information");
    }
        break;
    default: console.log("Select proper designation");
        break;
}