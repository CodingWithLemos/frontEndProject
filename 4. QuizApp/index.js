// create the button to verify input
const btn_verify = document.getElementById("verify_btn")

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
    // create the button to proceed to the next question
    const btn_next = document.getElementById("next_btn")

    // create the feedback containers
    const answer_correct = document.getElementById("feedback_correct")
    const answer_incorrect = document.getElementById("feedback_incorrect")

    let user_input = document.querySelector("input:checked")
    let container = user_input.parentElement
    let user_choice = container.innerText.trim()

    // style the answer container and output the proper feedback
    if (user_choice === 'Lisbon') {
        container.style.backgroundColor = "#b8eb93" 
        answer_correct.style.display = "block"
    } else {
        container.style.backgroundColor = "#ffab9c"
        document.getElementById("choice3").parentElement.style.backgroundColor = "#b8eb93"
        answer_incorrect.style.display = "block"
    }

    // enable the 'next' button
    btn_next.removeAttribute("disabled")
}

btn_verify.addEventListener("click", isCorrect)