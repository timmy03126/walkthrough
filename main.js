
console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = `http://localhost:4000`
// const baseURL = 
getAllBtn.addEventListener(`click`, () => {
  axios.get(`${baseURL}/characters`)
  .then ((response) =>{
    clearCharacters()
    for (let i = 0; i < response.data.length; i++) {
      createCharacterCard(response.data[i])
    }
  })
  .catch(() => {

  })
})

ageForm.addEventListener(`submit`, (event) => {
  event.preventDefault()

  let age = ageInput.value 

  axios.get(`${baseURL}/character?age=${age}`)

  .then((response) => {
    clearCharacters()
    for (let i = 0; i < response.data.length; i++) {
      createCharacterCard(response.data[i])
    }
  })
  .catch((error) => {

  })
})

createForm.addEventListener(`submit`, (event) =>{
  event.preventDefault()

  
  
})
function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}