
// Arrow Functions

/*

const appName = (x, y) => {

    let j = x + y;

    return j;


};


console.log(appName(1, 12));

*/

/*
function appName(x, y){

    return x + y;
}

console.log(appName(1, 2))
*/

// Template Strings

/*

const a = 10;
const b = 20;

console.log(`${a+b}`);

*/

// Rest arguments


/*

const infiniteArgs = (...args) => {
    let sum = 0;
    for(let i = 0; i<args.length; i++){
        sum += args[i];
    }

    return sum;
};


console.log(infiniteArgs(10, 10, 20, 30, 50));

*/

// Spread property


/*
const array = [1, 2, 3];

const copyArray = array;

array.push(4);

console.log(array);
// (4) [1, 2, 3, 4]

console.log(copyArray);
//(4) [1, 2, 3, 4]

*/

/*
const array = [1, 2, 3 ]

const copyArray = [...array];


copyArray.push(4);

console.log(array);
// (3) [1, 2, 3]

console.log(copyArray);
//(4) [1, 2, 3, 4]
*/

// Destructing property


/*
let employeeObj = {

    name : "Ganesh Ram",
    age : 24,
    location : "Vellore"

}

const {name : myName, age, location} = employeeObj;
console.log(myName);
*/

/*
const arr = [1, 2, 3, 4];

const tranny = arr.map(item => item + 10);

console.log(tranny);


const arr = [1, 2, 3, 4];

const out = arr.reduce((acc, element) => acc + element, 0);

console.log(out);

*/