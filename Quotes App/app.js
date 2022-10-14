

fetchrandomQuote = () => {
    let randomnumber = Math.floor(Math.random() * 1000)

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (quote) {
            //console.log(quote[randomnumber].text, quote[randomnumber].author); //bcz its an array so it contains index positions so we used square bracket to fetch the individual quote
            document.getElementById("Rquote").innerHTML = quote[randomnumber].text;
            document.getElementById("author").innerHTML = quote[randomnumber].author
        });

    let maincard = document.getElementById("cardid");



}

fetchrandomQuote();









// fetch("https://type.fit/api/quotes")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });