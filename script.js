const html = document.documentElement
const img = document.querySelector('#profile img')

function toggleMode() {
  html.classList.toggle("light")

  if(html.classList.contains("light")) {
    img.setAttribute("src", "./utilities/images/avatar/avatar-light-mode.png")
  } else {
    img.setAttribute("src", "./utilities/images/avatar/avatar-dark-mode.png")
  }
}