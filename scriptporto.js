const buttonSubmit = document.getElementById('button-submit')
const buttonEdit = document.getElementById('button-edit')

let inputName = document.querySelector('#form-name')
let inputRole = document.querySelector('#form-role')
let inputAvailability = document.querySelector('#form-avail')
let inputAge = document.querySelector('#form-age')
let inputLocation = document.querySelector('#form-location')
let inputExperience = document.querySelector('#form-experience')
let inputEmail = document.querySelector('#form-email')
let textName = document.querySelector('#text-name')
let textRole = document.querySelector('#text-role')
let textAvailability = document.querySelector('#text-avail')
let textAge = document.querySelector('#text-age')
let textLocation = document.querySelector('#text-location')
let textExperience = document.querySelector('#text-experience')
let textEmail = document.querySelector('#text-email')
let formData = document.getElementById('form-data')

buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputName.value, inputRole.value, inputAvailability.value, inputAge.value, inputLocation.value, inputExperience.value, inputEmail.value)
    textName.innerText = inputName.value
    textRole.innerText = inputRole.value
    textAvailability.innerText = inputAvailability.value
    textAge.innerText = inputAge.value
    textLocation.innerText = inputLocation.value
    textExperience.innerText = inputExperience.value
    textEmail.innerText = inputEmail.value
    formData.style.display = 'none'
})

buttonEdit.addEventListener('click', function (event) {
    event.preventDefault()
    if (formData.style.display == 'none') {
        formData.style.display = 'block'
        inputName.value = textName.innerText
        inputRole.value = textRole.innerText
        inputAvailability.value = textAvailability.innerText
        inputAge.value = textAge.innerText
        inputLocation.value = textLocation.innerText
        inputExperience.value = textExperience.innerText
        inputEmail.value = textEmail.innerText
    } else {
        formData.style.display = 'none'
    }
})

