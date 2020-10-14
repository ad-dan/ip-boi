
const $element = document.getElementById("data")
const showData = data => {
  const ip = data.ip
  $element.innerText = ip
}
const showError = err => {
  $element.innerHTML = "Please disable your AdBlock"
}
fetch("https://json.geoiplookup.io/")
  .then(response => response.json())
  .then(showData)
  .catch(showError)

  /*
  I used Geoiplookup instead of freegeoip
  also there is a limitaion for Geoiplookup
  you could find more from here https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
  */
