const myKey = config.MY_KEY
const count = 10
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${myKey}&count=${count}`

async function getPhotos () {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json
    console.log(data)
  } catch (error) {
    //console.log(error)
  }
}

//On page load
getPhotos()
