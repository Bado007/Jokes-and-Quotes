const quoteText = document.querySelector(".quote-text"); // #Variable for Quote
generateQuoteBtn = document.querySelector(".generate-quote");

//Random Quote function
function randomQuote(){
    //fetch random quote and transform it into object "guote text"
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result)
    })
};

generateQuoteBtn = addEventListener('click', randomQuote); // for generate Quote bottom

