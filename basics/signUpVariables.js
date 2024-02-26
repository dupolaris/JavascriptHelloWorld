//learning points: var, let, const and how to console.log in different ways using + operator and ` ` (backticks/interpolation)

console.log("hello world");

const uid = "abc123";
var firstName = "muhammad";
var lastName = "dawood";
const uPassword = "123456";
var country = "Pakistan";
var isLoggedInViaGoogle =  true;
var isLoggedInViaFacebook = false;

console.log(`
    User ID is: ${uid}
    User Name is: ${firstName + " " + lastName}
    User Password is: ${uPassword}
    Country of Residence: ${country}
    Google as logging site: ${isLoggedInViaGoogle}
    Facebook as logging site: ${isLoggedInViaFacebook}
`);