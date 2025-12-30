function quiz() {
    // create the button to verify input
    const btn_verify = document.getElementById("verify_btn")

    // create function to enable 'verify' button
    function btn_enable() {
        btn_verify.removeAttribute("disabled")
    }

    // accept user input
    let userInput = document.querySelectorAll("input")

    // enable the 'verify' button by clicking any input
    userInput.forEach(function(inpt) {
        inpt.addEventListener("click", btn_enable)
    })

    // evaluate user input
    function isCorrect() {
        // create the button to proceed to the next question
        const btn_next = document.getElementById("next_btn")

        // create the feedback containers
        const answer_correct = document.getElementById("feedback_correct")
        const answer_incorrect = document.getElementById("feedback_incorrect")

        let userHasSelected = document.querySelector("input:checked")
        let container = userHasSelected.parentElement
        let userChoice = container.innerText.trim()

        // style the answer container and output the proper feedback
        if (userChoice === 'Lisbon') {
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
        userInput.forEach(function(inpt) {
            inpt.setAttribute("disabled", "true")
            inpt.removeEventListener("click", btn_enable)
        })

        // click the 'next' button to proceed to the next question
        btn_next.addEventListener("click", function() { document.location.reload() })
    }

    btn_verify.addEventListener("click", isCorrect)
}

quiz()