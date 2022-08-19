const imageContainer = document.getElementById('image_container')
const loader = document.getElementById('loader')

let imagesLoaded = 0
let totalImages = 0
let ready = false
let photosArray = []

const myKey = config.MY_KEY
const count = 30
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${myKey}&count=${count}`

function imageLoaded () {
  imagesLoaded++
  console.log(imagesLoaded)

  if (imagesLoaded === totalImages) {
    ready = true
    loader.hidden = true
    console.log('ready =', ready)
  }
}

//Helper function to set attributes on DOM elements
function setAttributes (element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

//Create elements for links and photos and add to DOM
function displayPhotos () {
  imagesLoaded = 0
  totalImages = photosArray.length
  console.log('total images', totalImages)

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

    //Event listener to check when each image has finished loading
    img.addEventListener('load', imageLoaded)

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

//Check to see if scrolling near bottom of page
window.addEventListener('scroll', e => {
  //console.log('scrolled')
  //console.log('event.target:', e.target)
  //console.log('event.currentTarget:', e.currentTarget)
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    //console.log('window.innerHeight:', window.innerHeight)
    //console.log('window.scrollY:', window.scrollY)
    //console.log(
    //'window.innerHeight + window.scrollY:',
    //window.innerHeight + window.scrollY
    //)
    //console.log(
    //'document.body.offsetHeight - 1000:',
    //document.body.offsetHeight - 1000
    //)

    getPhotos()
  }
})
//On page load
getPhotos()
