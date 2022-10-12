
// console.log("task1 has done");
// console.log("task 2 has done");

// setTimeout(()=>{
//     console.log("task 3 has done")
// }, 3000)

// console.log("task 4 has done");

// let promise = new promise((resolve, reject) => {
//     resolve();
// })
// promise.then(()=>{
//     console.log("completed  ");
// })



// console.log("downloading..")
// let taskA = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         console.log("image downloaded")
//         resolve()
//     }, 4000)
// })
// taskA.then(()=>{
//     console.log("image processed!")
// })

// let promise = new Promise((resolve, reject) => {
//     // reject();
//     resolve()
// })

// promise.then(()=>{
//     console.log("task completed");
// }).catch(()=>{
//     console.log("something went wrong")
// })

// fetch("https://type.fit/api/quotes").then((response)=>{
//     return response.json(); // we are getting json format data of object
// }).then((data)=>{
//     console.log(data[0].text);
// });


quote=() => {
    let random = Math.floor(Math.random()*100)

    fetch("https://type.fit/api/quotes").then((response)=>{
        return response.json(); // we are getting json format data of object
    }).then((data)=>{
        console.log(data[random].text, data[random].author); // in above json we passed one argument which will call the properties in it
    });
}
quote();