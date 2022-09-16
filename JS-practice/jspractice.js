// let collection = [{ name: "tiger", email: "tiger@gmail.com", age: 10 }, 
// { name: "lion", email: "lion@gmail.com", age: 18 }, 
// { name: "Escimow", email: "escimow@gmail.com", age: 18 }, 
// { name: "hare", email: "hare@gmail.com", age: 6 }, 
// { name: "jackle", email: "jackle@gmail.com", age: 19 }];

// function letsfind(age) {
//     for (let i=0; i<collection.length;i++){
//         console.log(age);
//         if (collection[i].age>=18){
//             console.log(collection[i]);
//         }
//     }
// }
// letsfind(25);

// let numbers = [3, 5, 9, 1, 2, 6, 0, 23, 78, 99, 11, 71, 89];

// let maximum = numbers.reduce((max, curr)=>{
//     if(curr > max){
//         max = curr;
//     }
//     return max
// }, 0)

// console.log(maximum)



// let data = []

// function register(){
//     let PersonName = document.getElementById('name').value;
//     let PersonEmail = document.getElementById('email').value;

//     // let collect = data.filter((x)=>{

//     // })

//     for(let i = 0; i<=data.length; i++){
//         let collect ={name:PersonName, email:PersonEmail}
//         if(collect.email==PersonEmail){
//             data.push(collect)
//         }
//         else{
//             console.log("user is already exist")
//         }
//     }
//     console.log(data)
// }





let users = []

function register() {
    let usersName = document.getElementById('name').value;
    let usersEmail = document.getElementById('email').value;
    // console.log(users);
    // console.log(users[0]);
    let usercount = users.filter((x) => {
        return x.email == usersEmail;
    }) // if the filter passes a data then it have some length

    if (usersName != "" && usersEmail != "") {
        if (usercount.length == 0) {
            let user = {
                name: usersName,
                email: usersEmail,
            }
            users.push(user)
            let generateContainer = document.getElementById('userContainer');
            let div = document.createElement('div');
            div.classList.add("user-card");
            generateContainer.appendChild(div);
            let getname = document.createElement('h3');
            let getemail = document.createElement("p");
            div.appendChild(getname);
            div.appendChild(getemail);
            getname.innerHTML = usersName;
            getemail.innerHTML = usersEmail;
        }
        else {
            console.log("user is already exist");
        }
        console.log(users);
        document.getElementById('name').value = "";  // to remove the data that lays in input field after register
        document.getElementById('email').value = "";
    }
    else {
        alert("enter user fields")
    }

}



//to create new element and put the user input data inside it

// let generateContainer = document.getElementById('userCountainer');

// let div = document.createElement("div");
// generateContainer.appendChild(div);
// let div1 = document.createElement('h1')
// div.appendChild(div1)

// let foralert = document.getElementsByClassName('alert-msg')[0];
// console.log(foralert);




checkdoubleentry = () => {  
    let foralert = document.getElementById("demo");
    let usersEmail = document.getElementById('email').value;
    let usercount = users.filter((x) => {
        return x.email == usersEmail;
    })
    if (usercount.length == 0) {
        foralert.classList.add("alert-msg")
    }
    else {
        foralert.classList.remove("alert-msg")
    }


}










