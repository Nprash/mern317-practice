let yourname = "prasanth"
var x = 6
let isthis = false;
const count =
    // let word = null
    // var color=null;


    console.log(x);
console.log(typeof x);
console.log(yourname);
console.log(typeof yourname);
console.log(typeof isthis);
console.log(count);
console.log(typeof count);
// console.log(word);
// console.log(color);
// console.log()

let xy = ["prsanth", 465, true, null, undefined];
console.log(xy);
console.log(typeof xy);
// console.log(length.xy);
console.log(typeof xy[2]);
console.log(xy[1]);
console.log(xy.push(767));
console.log(xy);
console.log(xy.pop());
console.log(xy);
console.log(xy[3])

xy.splice(1, 2);  //splice -> array.splice(index, items to be removed, {items to be added->optonal})
console.log(xy);

xy.splice(0, 0, "puppy", "kitten")  // to add values to an array
console.log(xy);

let kitten = { color: "black", size: 20, sound: "mew", fur: "smooth", character: "cute" };
console.log(typeof kitten);

kitten.eyes = "green";
console.log(kitten);

var newsound = "sound"
kitten[newsound] = "roar";
console.log(kitten);
console.log(typeof kitten);



//objects -> key value pair

let user = {
    name: 'ashish',
    email: 'ashish@gmail.com',
    hobbies: ['cricket', 'cooking', 'coding', 12, true],
    age: 24,
};

console.log(user);

user.name = 'ashish kumar';
user.mobile = 1234567890;
console.log(user)

delete user.age;
console.log(user);

console.log(user.email);
console.log(user.name);
console.log(user[1]);


let vegitable = [
    { name: "prasanth", address: "sklm" },
    { name: "kitten", address: "bhubaneswar" },
    { name: "saya", address: "mubai" }
];
console.log(typeof vegitable);
console.log(vegitable[1]);


//conditionals


let users = [
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Ashish', email: 'ashish@gmail.com' },
    { name: 'archan', email: 'archanrd@gmail.com' },
    { name: 'abhishek', email: 'abhisheksharma@gmail.com' },
    { name: 'Nisha', email: 'np@gamil.com' },
    // {name:"manas", email: 'krishnamanash@gmail.com'},
    // {name: 'Rohit', email: 'rohitak120@gmail.com'},
    // {name:'Manikanta', email:'manikanta9@gmail.com'},
    // {name: "Nimmana Prasanth", email: "npr@gmail.com"},
    // {name: 'shubhangi' ,email:'shubhangibitake24@gmail.com'}
]

// console.log(users.length)
let totalusers = users.length;

// let winner = Math.floor(Math.random() * totalusers);
// console.log(Math.random()*4);
let N = Math.floor(Math.random() * 5);

// console.log(users[N].name);
console.log(users[N].email);

//conditionals


let age = 41;
if (age > 40) {
    console.log('You are eligible to vote');
}
else if (age < 13) {
    console.log("you are not eligible  get marry");
}

else if (age > 40) {
    console.log("you are not eligible  get marry");
}
else {
    console.log('You are not eligible to vote');
}



let ages = "181";

if (ages === "181") {
    console.log('congrats you are 18');
}
else {
    console.log("you are nothgfghh");
}


//ternary operator
// condition ? (true)  : false
// let age = 19;
let role = 0;
let userStatus = role == 0 ? 'student' : role == 1 ? 'teacher' : role == 2 ? 'admin' : 'invalid user';
console.log(userStatus);

//if else statement
// let age = 29;

// if(age > 18 && age <24){
//     console.log('You are eligibe to apply');
// }

// let friend = 'ruchika';

// if(friend == 'Nisha'  || friend == 'ruchi' || friend == 'ruchika'){
//     console.log('i will be there for party');
// }
// else{
//     console.log('i will not be there for party');
// }
// let userName = 'ashish';
// let password = '123456'
// if (password == '12345' && userName == 'ashish') {
//     console.log('login successfull')
// }
// else {
//     console.log('Login failed!')
// }


// console.log('10' && 2)
// console.log(2 && '10')
// console.log('10' & 2)
// console.log(2 & '10')

// console.log('10' || 2)
// console.log(2 || '10')
// console.log('10' | 2)



//functions

function grinder(items) {
    console.log("you are eligible  get marry", items);
}
grinder("pomegranates");

function add(num1, num2) {
    console.log(num1 + num2)
}

add(2, 3);
add(12, 23);

// function calcTds(salary) {
//     let tds = salary * 0.1;
//     console.log(tds);
//     // return tds;
// };

// calcTds(35000);
// console.log(tds);

//arrow functions

// countTds = (salary) => { let tds= salary*0.1; console.log(tds)};
// countTds(12000);

calculate = (S) => {let  nets =  S-(S * 0.1); console.log("my net salary will be", nets)};
calculate(15000);


cube = (x) => {let N = x*x*x ; console.log("cube of the given number is =", N)};
cube(2);

let shoppingList = ['Milk', 'Coffee', 'Butter', 'Notebook', 'Pen'];

for(let x=0; x<5; x++){
    console.log(shoppingList[x])
};


//map
// var rivers = ["ganga", "brahmaputhra", "sindhu", "tapathi", "bahuda"];
let rivers = [2,4,6];
let sqr = rivers.map((x)=>{return x*x});
console.log(sqr);

//filter


let greaterthen3 = rivers.filter((x)=>{
    if(x>3){
        return x;
    }
})
console.log(greaterthen3)

//chain system map and filter

let counter = [2,4,6,8,10]
let powernumber = counter.map((x)=>{
    return x*x*x*x*x;
}).filter((y)=>{
    return y>200;
})

console.log(powernumber);
