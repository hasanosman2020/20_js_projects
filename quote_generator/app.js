const quoteContainer = document.getElementById('quote_container')
const quoteText = document.getElementById('quote')
const authorName = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new_quote')
const loader = document.getElementById('loader')

let apiQuotes = []

//Show loading
function loading () {
  loader.hidden = false
  quoteContainer.hidden = true
}
//Show complete loading
function completeLoading () {
  quoteContainer.hidden = false
  loader.hidden = true
}

//Show new quote
function newQuote () {
  loading()

  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
  authorName.textContent = quote.author
  quoteText.textContent = quote.text

  //Check if author name is null and replace it with 'Anonymous'
  if (quote.author === null) {
    authorName.textContent = 'Anonymous'
  }
  //Check length of quote to determine styling
  if (quote.text.length > 80) {
    quoteText.classList.add('long_quote')
  } else {
    quoteText.classList.remove('long_quote')
  }
  completeLoading()
}

//Get quotes from API
async function getQuotes () {
  loading()
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

//Tweet quote
function tweetQuote () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`
  window.open(twitterUrl, '_blank')
}

// Event listeners
newQuoteButton.addEventListener('click', newQuote)
twitterButton.addEventListener('click', tweetQuote)

//On Load
getQuotes()
//newQuote()
//loading()
