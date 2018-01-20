// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


 // two dimensional array of objects which house the quotes
var quotes = [
    { quote:"Life is like riding a bicycle, you must keep moving" ,
     source:"Albert Einstein" 
    },
    { quote:"In the end, we will remember not by the words of our enemies, but the silence of our friends" ,
     source: "Martin Luther King, Jr.", 
     citation:"speach at the white house",
     year:"1968"
    },
    { quote:"We think what we become" ,
     source:"Buddha"},
    { quote:"I'm crazy and i dont pretend to be anything else" ,
     source: "Rihanna" },
    { quote:"Wealth is just consistency... I dont wnat to be rich. I want to be wealthy" ,source:"Quavo" },
    { quote:"Dont make a girl a promise you cant keep" 
     ,source:"Cortana", 
     citation: "Halo Video Game series",
     year: "2010"},
    { quote:"Innovation distinguishes between a leader and a follower" ,
     source:"Steve Jobs"},
    { quote:"If you cant toloerate critics, dont do anything new or interesting" ,
     source:"Jeff Bezos" },
    { quote:"Success is a lousy teacher. It Seduces smart people into thinking they cant lose" ,source:"Bill Gates" },
    { quote: "Wherever smart people work, doors are unlocked" ,
     source: "Steve Wozniak"}
    
];

var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// this is a function which random chooses a index to which relates to a random quote, this is acheived with the math.random method
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

// Fucntion to allow the full color gamut of red blues and green to generate the random color
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// This is a function that retrieves the slected code and prints out to the corresponding Html element
function printQuote() {
	
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Gets random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('background').style.backgroundColor = randomColorGenerator();
}
