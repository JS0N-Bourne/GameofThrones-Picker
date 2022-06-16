// document.querySelector('select').addEventListener('click', getFetch)
const url = "https://thronesapi.com/api/v2/Characters/"
const select = document.querySelector('select')
let allTheCharacters = []
window.onload = getFetch()

function getFetch(){
  const choice = document.querySelectorAll("select")

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        allTheCharacters = data;
        console.log(data)
        data.forEach(char => {
          document.querySelector('select').innerHTML += `<option value="${char.firstName + char.lastName}">${char.firstName} ${char.lastName}</option>`
        })
        select.onchange = changeImage
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function changeImage() {
  let pic = allTheCharacters[select.selectedIndex - 1].imageUrl
  document.querySelector('.char-img').src = pic
}

function changeName() {
  let name = allTheCharacters[select.selectedIndex - 1].fullName
  document.querySelector('#item').innerText = data.fullName
}
