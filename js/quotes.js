const quotes = [
	{
		quote: "There is more wisdom in your body than in your deepest philosophies.",
		author: "Friedrich Nietzsche"
	},
	{
		quote: "The key to immortality is first living a life worth remembering.",
		author: "Bruce Lee",
	},
	{
		quote: "As you think, so shall you become.",
		author: "Bruce Lee",
	},
	{
		quote: "It is kind of fun to do the impossible.",
		author: "Walt Disney",
	},
	{
		quote: "There are better starters than me but I’m a strong finisher.",
		author: "Usain Bolt",
	},
	{
		quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
		author: "Michael Jordan",
	},
	{
		quote: "If you run you stand a chance of losing, but if you don't run you've already lost.",
		author: "Barack Obama",
	},
	{
		quote: "The only place where success comes before work is in the dictionary.",
		author: "Vidal Sassoon",
	},
	{
		quote: "I'm meant to be.",
		author: "Friedrich Nietzsche",
	},
	{
		quote: "God is dead.",
		author: "Friedrich Nietzsche",
	}
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author