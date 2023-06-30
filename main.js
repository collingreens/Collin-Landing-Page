// Random Quotes
const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: "Waste no more time arguing what a good man should be. Be One.",
    author: "— Marcus Aurelius"
  },
  {
    quote: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    author: "— Seneca"
  },
  {
    quote: "Curb your desire—don’t set your heart on so many things and you will get what you need.",
    author: "— Epictetus"
  },
  {
    quote: "Be tolerant with others and strict with yourself.",
    author: "— Marcus Aurelius"
  },
  {
    quote: "How long are you going to wait before you demand the best for yourself?",
    author: "— Epictetus"
  },
  {
    quote: "First say to yourself what you would be; and then do what you have to do.",
    author: "— Epictetus"
  }
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});

// Image Slider
  