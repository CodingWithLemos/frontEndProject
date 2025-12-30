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

    // disable the 'verify' button so user can't re-verify after feedback
    btn_verify.setAttribute("disabled", "disabled")

    // disable all input buttons so user can't re-verify after feedback
    const all_inputs = document.querySelectorAll("input")

    all_inputs.forEach(function(inpt) {
        inpt.setAttribute("disabled", "true")
        inpt.removeEventListener("click", btn_enable)
    })

    // click the 'next' button to proceed to the next question
    btn_next.addEventListener("click", function() { document.location.reload() })
}

btn_verify.addEventListener("click", isCorrect)