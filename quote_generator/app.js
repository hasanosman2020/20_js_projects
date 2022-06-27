let apiQuotes = []

//Show new quote
function newQuote () {
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
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
