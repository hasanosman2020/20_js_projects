async function getQuote () {
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch {
    console.log('Error', error)
  }
}
