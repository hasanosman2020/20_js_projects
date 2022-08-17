const imageContainer = document.getElementById('image_container')
const loader = document.getElementById('loader')

let photosArray = []

const myKey = config.MY_KEY
const count = 10
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${myKey}&count=${count}`

//Helper function to set attributes on DOM elements
function setAttributes (element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

//Create elements for links and photos and add to DOM
function displayPhotos () {
  //Run function for each object in photosArrsy
  photosArray.forEach(photo => {
    //Create <a> to link to Unsplash
    const item = document.createElement('a')
    //item.setAttribute('href', photo.links.html)
    //item.setAttribute('target', '_blank')
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    })

    //Create <img> for photo
    const img = document.createElement('img')
    //img.setAttribute('src', photo.urls.regular)
    //img.setAttribute('alt', photo.alt_description)
    //img.setAttribute('title', photo.alt_description)
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })

    //Put <img> inside <;> then put both inside imageContainer
    item.appendChild(img)
    imageContainer.appendChild(item)
  })
}

//Get photos from Unsplash API
async function getPhotos () {
  try {
    const response = await fetch(apiUrl)
    //const data = await response.json
    photosArray = await response.json()
    //console.log(data)
    console.log(photosArray)
    displayPhotos()
  } catch (error) {
    //console.log(error)
  }
}

//On page load
getPhotos()
