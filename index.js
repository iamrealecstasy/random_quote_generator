let quoteBank = [
    {
        quote: "“When the power of love overcomes the love of power the world will know peace.”",
        author: "Jimi Hendrix"
    }, {
        quote: "“We cannot solve our problems with the same thinking we used when we created them.”",
        author: "Albert Einstein"
    }, {
        quote: "“It is the mark of an educated mind to be able to entertain a thought without accepting it.”",
        author: "Aristotle"
    }, {
        quote: "“It always seems impossible until it's done.”",
        author: "Nelson Mandela"
    }, {
        quote: "“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.”",
        author: "Thomas A. Edison"
    }, {
        quote: "“Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.”",
        author: "Norman Vincent Peale"
    }, {
        quote: "“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”",
        author: "Helen Keller"
    }, {
        quote: "“The best preparation for tomorrow is doing your best today.”",
        author: "H. Jackson Brown, Jr."
    }, {
        quote: "“Never deprive someone of hope; it might be all they have.”",
        author: "H. Jackson Brown, Jr."
    }, {
        quote: "“Once you replace negative thoughts with positive ones, you'll start having positive results.”",
        author: "Willie Nelson"
    }, {
        quote: "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
        author: "Lao Tzu"
    }, {
        quote: "“There is nothing on this earth more to be prized than true friendship.”",
        author: "Thomas Aquinas"
    }, {
        quote: "“Everything has beauty, but not everyone sees it.”",
        author: "Confucius"
    }, {
        quote: "“The beauty of a woman is not in a facial mode but the true beauty in a woman is reflected in her soul. It is the caring that she lovingly gives the passion that she shows. The beauty of a woman grows with the passing years.”",
        author: "Audrey Hepburn"
    }, {
        quote: "“Life isn't about finding yourself. Life is about creating yourself.”",
        author: "George Bernard Shaw"
    }, {
        quote: "“Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.”",
        author: "Dalai Lama"
    }, {
        quote: "“Do not take life too seriously. You will never get out of it alive.”",
        author: "Elbert Hubbard"
    }, {
        quote: "“Attitude is a little thing that makes a big difference.”",
        author: "Winston Churchill"
    }, {
        quote: "“We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone.”",
        author: "Orson Welles"
    }, {
        quote: "“Every morning in Africa a Gazelle wakes up, it knows it must outrun the fastest Lion or it will get killed. Every morning in Africa a Lion wakes up, it knows it must run faster than the slowest Gazelle or it'll starve. It doesn't matter if you're a Lion or a Gazelle, when the Sun comes up you better be running.”",
        author: "Akinrinola Daniel Ayomide"
    },
]

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let quoteBtn = document.querySelector(".quote-btn");
let tweetBtn = document.querySelector(".tweet-btn");
let text = document.getElementById("text");
let publisher = document.getElementById("author")

window.onload = init;
function init() {
    generateQuote();
}

function generateQuote() {
    let quoteSize = quoteBank.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);

    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor;
    quoteBtn.style.backgroundColor = hexColor;
    tweetBtn.style.backgroundColor = hexColor;
    text.style.color = hexColor;
    publisher.style.color = hexColor;

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    ;

    // Add the Quote
    let quoteInApiFormat = quoteBank[randomIndex].quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;
    
    // Add the Author
    let authorInApiFormat = quoteBank[randomIndex].author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat;

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = quoteBank[randomIndex].quote;
    document.getElementById("author").innerText = "- " + quoteBank[randomIndex].author;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}