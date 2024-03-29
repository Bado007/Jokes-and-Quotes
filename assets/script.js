let quoteText = document.querySelector(".quote-text");
let authorName = document.querySelector(".author-name");
let generateInspoBtn = document.querySelector(".make-inspo");
let generateJokeBtn = document.querySelector(".make-joke");
let copyTextBtn = document.querySelector(".copy-me");

//Random Quote Function
function randomInspo(){
    generateInspoBtn.classList.add("loading");
    generateInspoBtn.innerText = "Loading Quote...";
    //fetch random quote and transform it into object "guote text"
    fetch("https://api.quotable.io/random").then(res => res.json().then(result => {

        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        generateInspoBtn.innerText = "Generate new Quote";
        generateInspoBtn.classList.add("loading");
        
    }));
    return(randomInspo);
}

// Random Joke Function
function randomJoke(){
    generateJokeBtn.classList.add("loading");
    generateJokeBtn.innerText = "Just a second...";
    //Fetch Joke and transform it into object "quote-text"
    fetch("https://v2.jokeapi.dev/joke/Any?format=json&type=single").then(res => res.json().then(result => {

        quoteText.innerText = result.joke; 
        authorName.innerText = "";
        generateJokeBtn.innerText = "Generate  Joke!";
        generateJokeBtn.classList.remove("loading");
    }));
   
}

//Copy-Me Function 
copyTextBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

//Event that calls function for Quote generation
generateInspoBtn.addEventListener('click', randomInspo); 

//Event that calls function for Joke generation
generateJokeBtn.addEventListener('click', randomJoke);
