// function greeter() {
//     console.log("Hello!");
// }
//
// let helloSayer = greeter; //we can treat function as a variable
// console.log(helloSayer == greeter)
//
// helloSayer();



function createGreeter (name) {
    let firstName = name.split(" ")[0]
    function greeter () {
        console.log("Hello " + firstName);
    }

    return greeter;
}

let johngreeter = createGreeter("John Doe");
let harrygreeter = createGreeter("Harry Potter");

johngreeter();
harrygreeter();