const $element = document.getElementById("data")
const showData = data => {
  const ip = data.ip
  $element.innerText = ip
}
const showError = err => {
  $element.innerHTML = "Please disable your AdBlock"
}
fetch("https://freegeoip.net/json/")
  .then(response => response.json())
  .then(showData)
  .catch(showError)
