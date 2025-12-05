// create the feedback containers
const answer_correct = document.getElementById("feedback_correct")
const answer_incorrect = document.getElementById("feedback_incorrect")

// create the button to proceed to the next question
const btn_next = document.getElementById("next_btn")

// create the button to verify input
const btn_verify = document.getElementById("btn_verify")

// accept user input
let user_input = document.querySelectorAll("input")

user_input.forEach(function(inpt) {

    let inpt_str = ""

    inpt.addEventListener("click", btn_verify.removeAttribute("disabled"))

    inpt_str = inpt.nextSibling.textContent

    if (inpt_str === 'Lisbon') {
        answer_correct.setAttribute("style", "display: block;")
    } else {
        
    }

})

