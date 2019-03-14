// CODING CHALLENGE 2

/*
1. create an array with some years where persons were born
2. create an empty array (just [] )
3 use a loop to fill the array with the ages of the persons
4. use another loop to log into the console whether each person is of full age (18 or older), as their age
5. finally, create a function called printFullAge which receives the vector of years as an argument, executes the steps 2,3 and 4 and returns a vector of true/false boolean valyes: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. call the function with two different vectors and store the results in two variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can use the specific array methods.
 */




function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    for (var i = 0; i < years.length; i++)
    {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++)
    {
        if (ages[i] >= 18){
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not of full age');
            fullAges.push(false);
        }
    }

    return fullAges;

}
var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012,1915,1999]);