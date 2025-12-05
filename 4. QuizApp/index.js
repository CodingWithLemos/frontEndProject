// create the feedback containers
const answer_correct = document.getElementById("feedback_correct")
const answer_incorrect = document.getElementById("feedback_incorrect")

// create the button to proceed to the next question
const btn_next = document.getElementById("next_btn")

// create the button to verify input
let btn_verify = document.getElementById("verify_btn")

// create function to enable 'verify' button
function btn_enable() {

    btn_verify.removeAttribute("disabled")
}

// accept user input
let user_input = document.querySelectorAll("input")

// enable the 'verify' button by clicking any input
user_input.forEach(function(inpt) {
    inpt.addEventListener("click", btn_enable)
})

// evaluate user input
function isCorrect() {
    let user_input = document.querySelector("input:checked")
    let user_choice = user_input.nextSibling.textContent
    let container = user_input.parentElement

    // style the answer container
    if (user_choice === 'Lisbon') {
        container.setAttribute("style", "background-color: #00ff00;")    
    } else {
        container.setAttribute("style", "background-color: #ff0000;")   
    }

}

btn_verify.addEventListener("click", isCorrect)