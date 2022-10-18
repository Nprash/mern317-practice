
//let randomauthors = []; //to collect 3 random authors in this array to show at display as output
// When button was clicked the random quote and its author will present on the screen
fetchrandomQuote = () => {
    // randomauthors = [];

    fetch("https://type.fit/api/quotes") // this contains json first we fetch after we split the data
        .then(function (response) {
            return response.json();
        })
        .then(function (quote) {
            let randomnumber = Math.floor(Math.random() * quote.length);

            //console.log(quote[randomnumber].text, quote[randomnumber].author); //bcz its an array so it contains index positions so we used square bracket to fetch the individual quote
            document.getElementById("Rquote").innerHTML = quote[randomnumber].text;
            document.getElementById("author").innerHTML = quote[randomnumber].author

//this function has declared below as a globally, so we just called the function inside at last line            

            // function renderRandomAuthor() {
            //     let randomauthors = [];

            //     fetch("https://type.fit/api/quotes") // this contains json first we fetch after we split the data
            //         .then(function (response) {
            //             return response.json();
            //         })
            //         .then(function (quote) {
            //             let randomnumber = Math.floor(Math.random() * quote.length);
            //             randomauthors.push(quote[randomnumber].author);
            //             // console.log(randomauthors); we are getting 1 random authhor we need to collect 3 random authors
            //             randomauthors.push(quote[randomnumber - 3].author);
            //             randomauthors.push(quote[randomnumber - 9].author);

            //             //to show/rander these 3authors names on the screen
            //             let authorscontainer = document.getElementById("authors-container");
            //             authorscontainer.innerHTML = "";
            //             // console.log(authorscontainer); we are getting empty authorscontainer div
            //             randomauthors.map((x) => {
            //                 if (x != null) {
            //                     let author = document.createElement('div');
            //                     author.classList.add("author");
            //                     author.innerHTML = x;
            //                     author.addEventListener("click", renderRequestedQuotes); // when clicked on this author eventlistener triggered
            //                     authorscontainer.appendChild(author);

            //                 }
            //             })
            //         })
            // }
            renderRandomAuthor();
        });

    // let maincard = document.getElementById("cardid");
}
fetchrandomQuote();
// renderRandomAuthor();



renderRequestedQuotes = (event) => {
    // console.log(event.target.innerHTML);
    let requestedauthor = event.target.innerHTML;
    // console.log(requestedauthor)
    let authorname = document.getElementById("author-name").innerHTML = requestedauthor;//displyed this autor on h1 tag
    let showquotescontainer = document.getElementById("showquotescontainer")
    showquotescontainer.innerHTML = "";
    // to generate random authors by invoking this function, which means when clicked on renderRequestedQuotes it creates new 3 authors every time


    // function renderRandomAuthor() {
    //     let randomauthors = [];
    //     fetch("https://type.fit/api/quotes") // this contains json first we fetch after we split the data
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (quote) {
    //             let randomnumber = Math.floor(Math.random() * quote.length);
    //             randomauthors.push(quote[randomnumber].author);
    //             // console.log(randomauthors); we are getting 1 random authhor we need to collect 3 random authors
    //             randomauthors.push(quote[randomnumber - 3].author);
    //             randomauthors.push(quote[randomnumber - 9].author);

    //             //to show/rander these 3authors names on the screen
    //             let authorscontainer = document.getElementById("authors-container");
    //             authorscontainer.innerHTML = "";
    //             // console.log(authorscontainer); we are getting empty authorscontainer div
    //             randomauthors.map((x) => {
    //                 if (x != null) {
    //                     let author = document.createElement('div');
    //                     author.classList.add("author");
    //                     author.innerHTML = x;
    //                     author.addEventListener("click", renderRequestedQuotes); // when clicked on this author eventlistener triggered
    //                     authorscontainer.appendChild(author);

    //                 }
    //             })
    //         })

    // }
    renderRandomAuthor();  // to get the random autor when triggered the random autors when clicked on


    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (quote) {
            let requestedquotes = quote.filter((x)=>{
                return x.author == requestedauthor;
            }).map((x)=>{
                let div = document.createElement("div");
                div.classList.add('listofquotes');
                div.innerHTML = x.text;
                showquotescontainer.appendChild(div);
            })
        });
}
requestedquote = "";

//BELOW IS GLOBAL DECLARATION TO USE THIS INSIDE A FUNCTION
function renderRandomAuthor() {
    let randomauthors = [];

    fetch("https://type.fit/api/quotes") // this contains json first we fetch after we split the data
        .then(function (response) {
            return response.json();
        })
        .then(function (quote) {
            let randomnumber = Math.floor(Math.random() * quote.length);
            randomauthors.push(quote[randomnumber].author);
            // console.log(randomauthors); we are getting 1 random authhor we need to collect 3 random authors
            randomauthors.push(quote[randomnumber - 3].author);
            randomauthors.push(quote[randomnumber - 9].author);

            //to show/rander these 3authors names on the screen
            let authorscontainer = document.getElementById("authors-container");
            authorscontainer.innerHTML = "";
            // console.log(authorscontainer); we are getting empty authorscontainer div
            randomauthors.map((x) => {
                if (x != null) {
                    let author = document.createElement('div');
                    author.classList.add("demo");
                    author.classList.add("bg-success");
                    author.classList.add("rounded-1");
                    author.classList.add("py-2");
                    author.classList.add("px-3");
                    author.classList.add("my-2");
                    author.classList.add("text-light");
                    author.classList.add("mx-2");
                    
                    author.innerHTML = x;
                    author.addEventListener("click", renderRequestedQuotes); // when clicked on this author eventlistener triggered
                    authorscontainer.appendChild(author);

                }
            })
        })
}





// fetch("https://type.fit/api/quotes")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });



