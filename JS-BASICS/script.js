/*
console.log("hello workksdkdkc");
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);*/

/* var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + " " + age + " " + job + " " + isMarried);

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + 'is a' + age + 'years od' + job + '. Is he married?' + isMarried + '.');
*/


//operators lecture

/*var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26

ageJohn++;
ageMark *= 2;
console.log(ageJohn);
console.log(ageMark);
*/

// if else statement

/* var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :) ');
}

isMarried = false;

if(isMarried) {
    console.log('yea');
} else {
    console.log('no');
}

if (23 === "23") {
    console.log('sjkddfjf');
}
*/

//boolean logic and switch

/*
var age = 20;
if(age<20){
    console.log('John is a teenager');
} else if(age>=20 && age<30) {
    console.log('John is a young man');
}
else {
    console.log('John is a man');
}

var job = 'teacher';

job = prompt('what does john do?');

switch(job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab in libson');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('john does something ekse');
}
 */


// Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
// console.log(ageMary);

function yearUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years');
    } else {
        console.log(name + ' is already retired');
    }

}

yearUntilRetirement('John', 1990);
yearUntilRetirement('Mike', 1969);
yearUntilRetirement('Mary', 1948);

*/



// statements and expression
/*
function someFun(par){
 //code
}

var someFun = function(par){
    code
}

//Expressions
3 + 4;
var x = 3;

//Statements
if(x == 5) {
    //do something
}

*/


// Arrays

/*
var names = ['John', 'Jane', 'Mark'];

var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('Johm is NOT a teacher.');
}

 */

// objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

///objects and properties
/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2016 - yearOfBirth;
    }

};
*/

// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }

};


//console.log(john.family);
//console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/


//v2.0
/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }

};

john.calculateAge();
console.log(john);
*/


/////Loops

/*for (var i = 0; i < 10; i++)
{
   console.log(i);
}
*/

var names = ['john', 'jane', 'mary', 'mark', 'bob'];
/*
// for loops
for (var i = 0; i < 5; i++)
{
    console.log(names[i]);
}
for (var i = 0; i < names.length; i++)
{
    console.log(names[i]);
}

for (var i = names.length - 1; i>=0 ; i--)
{
    console.log(names[i]);
}
*/

// while loops
/* var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {


    if (i === 3) {
        continue;
    }

    console.log(i);
}
*/



///THE THIS KEYWORD

//console.log(this);

/*calculateAge(1985);

function  calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function  innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();