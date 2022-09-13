import { Modal} from './modal.js'
import {AlertError} from "./alert-error.js"
import { IMC, notANumber} from "./utils.js"
const form = document.querySelector('form')
const inputWeight = document.querySelector ('#weight')
const inputHeight = document.querySelector ('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector ('.modal .title span')
//const modalBtnClose = document.querySelector ('.modal button.close')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)
    if(showAlertError){
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    //modalWrapper.classList.add('open')
    Modal.open()

}

inputWeight.oninput= () => AlertError.close()
inputHeight.oninput= () => AlertError.close()