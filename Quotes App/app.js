
let randomauthors = [];

fetchrandomQuote = () => {
    randomauthors = [];

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (quote) {
            let randomnumber = Math.floor(Math.random() * quote.length);

            //console.log(quote[randomnumber].text, quote[randomnumber].author); //bcz its an array so it contains index positions so we used square bracket to fetch the individual quote
            document.getElementById("Rquote").innerHTML = quote[randomnumber].text;
            document.getElementById("author").innerHTML = quote[randomnumber].author
            randomauthors.push((quote[randomnumber].author)) // we want 3 author names on the screen so we used 3 times push over here
            randomauthors.push((quote[randomnumber + 3].author))
            randomauthors.push((quote[randomnumber + 6].author))
            // console.log(randomauthors);

            //to get authors names on the screen

            let authorscontainer = document.getElementById("authors-container");
            authorscontainer.innerHTML = "";
            randomauthors.map((x) => {
                if (x != null) {
                    let author = document.createElement('div');
                    author.classList.add("author");
                    author.addEventListener('click', renderRequestedQuotes) // when we click on any of author name we will get quotes 
                    author.innerHTML = x;
                    authorscontainer.appendChild(author);
                }
            })
        });
    // let maincard = document.getElementById("cardid");
}

fetchrandomQuote();

renderRequestedQuotes = (event) => {
    console.log(event.target.innerHTML);
    let requestedauthor = event.target.innerHTML;

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (quote) {
            let requestedquote = quote.filter((y) => {
                return y.author == requestedauthor; // wwe aare filtering those author names
            })
            // window.prompt(requestedquote)
            console.log(requestedquote)
            let listquote = document.getElementById("listquote");
            storequote = document.createElement('p');
            storequote.classList.remove("foralert");
            listquote.appendChild(storequote);
            storequote.innerHTML = requestedquote;
            console.log(requestedquote)
            storequote=setTimeout(()=>{
                storequote.classList.add("foralert")
            },20000)
        })
}
requestedquote="";







// fetch("https://type.fit/api/quotes")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });