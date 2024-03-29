const toggleSwitch = document.querySelector('input[type="checkbox"]')

// Switch Theme Dynamically
function switchTheme (event) {
  //console.log(event)
  //console.log(event.target.checked)
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)
