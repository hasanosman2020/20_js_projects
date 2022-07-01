const quoteContainer = document.getElementById('quote_container')
const quoteText = document.getElementById('quote')
const authorName = document.getElementById('author')
const twitterButton = document.getElementById('twotter')
const newQuoteButton = document.getElementById('new_quote')

let apiQuotes = []

//Show new quote
function newQuote () {
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
  authorName.textContent = quote.author
  quoteText.textContent = quote.text

  if (quote.author === null) {
    authorName.textContent = 'Anonymous'
  }

  if (quote.text.length > 120) {
    quoteText.classList.add('long_quote')
  }
}

//Get quotes from API
async function getQuotes () {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    //console.log(apiQuotes)
    //console.log(apiQuotes[52])
    newQuote()
  } catch (error) {
    //catch error here
  }
}

//On Load
getQuotes()
//newQuote()
