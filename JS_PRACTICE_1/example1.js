function getFirstName (fullName) {
    return fullName.split(" ")[0]
}

function greeter (findName, fullname) {
    let firstName = findName(fullname);
    console.log("Hello " + firstName);
}

greeter(getFirstName, "Shreya Kapoor");