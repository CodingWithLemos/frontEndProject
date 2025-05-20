let myFirstName = document.getElementById("my_name");

let chemistryArea = document.getElementById("chem");

let itArea = document.getElementById("technology");

myFirstName.addEventListener("click", function(){
    if (myFirstName.style.color != "green") {
        myFirstName.style.fontSize = "2.0rem";
        myFirstName.style.color = "green";
    } else {
        myFirstName.style.fontSize = "1.2rem";
        myFirstName.style.color = "tomato";
    }
}
)

chemistryArea.addEventListener("click", function(){
    if (chemistryArea.style.color != "green") {
        chemistryArea.textContent = " the study of matter and its interactions with energy and itself";
        chemistryArea.style.color = "green";
} else {
        chemistryArea.textContent = "Technological Chemistry";
        chemistryArea.style.cssText = "em, {color: tomato; font-size: 1.2rem}"
        chemistryArea.style.cssText = "em:hover {color: navy; font-size: 1.2rem; cursor: pointer}"
}
})

itArea.addEventListener("click", function(){
    if (itArea.style.color != "green") {
        itArea.textContent = " computers and computational systems";
        itArea.style.cssText = "color: green";
    } else {
        itArea.textContent = "IT"
        itArea.style.cssText = "em, {color: tomato; font-size: 1.2rem}"
        itArea.style.cssText = "em:hover {color: navy; font-size: 1.2rem; cursor: pointer}"
    }
})