// create the feedback containers
const answer_correct = document.getElementById("feedback_correct")
const answer_incorrect = document.getElementById("feedback_incorrect")

// create the button to proceed to the next question
const btn_next = document.getElementById("next_btn")

// create function to enable 'verify' button
function btn_enable() {
    // create the button to verify input
    var btn_verify = document.getElementById("verify_btn")

    btn_verify.removeAttribute("disabled")

}

// accept user input
let user_input = document.querySelectorAll("input")

// enable the 'verify' button by clicking any input
user_input.forEach(function(inpt) {
    inpt.addEventListener("click", btn_enable)
})
