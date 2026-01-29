/* This is a simple coffee machine simulation
* It allows the user to add water, ground coffee, sugar, and milk
* and then make a cup of coffee with the specified ingredients
The user can add ingredients by calling the respective functions*/

// Initialize the variables for the ingredients
let water = 0; // in mililiters
let grCoffee = 0; // in grams
let sugar = 0; // in teaspoons
let milk = 0; // in %

// event listeners to interact with html elements
document.getElementById("water_level_increase").addEventListener("click", addWater);

document.getElementById("water_level_decrease").addEventListener("click", removeWater);

document.getElementById("coffee_level_increase").addEventListener("click", addGroundCoffee);

document.getElementById("coffee_level_decrease").addEventListener("click", removeGroundCoffee);

document.getElementById("milk_level_increase").addEventListener("click", addMilk);

document.getElementById("milk_level_decrease").addEventListener("click", removeMilk);

document.getElementById("sugar_level_increase").addEventListener("click", addSugar);

document.getElementById("sugar_level_decrease").addEventListener("click", removeSugar);

document.getElementById("make_coffee").addEventListener("click", makeCoffee);

// functions to add and remove ingredients
function addWater() {
    if (water < 1000) {
        water += 100;
    } else {
        alert("Water tank is full");
    }

    document.getElementById("water_level_value").textContent = water;
}

function removeWater() {
    if (water > 0) {
        water -= 100;
    } else {
        alert("Water tank is empty");
    }
    document.getElementById("water_level_value").textContent = water;
}

function addGroundCoffee() {
    if (grCoffee < 1000) {
        grCoffee += 50;
    } else {
        alert("Ground coffee dispenser is full");
    }

    document.getElementById("coffee_level_value").textContent = grCoffee;
}

function removeGroundCoffee() {
    if (grCoffee > 0) {
        grCoffee -= 50;
    } else {
        alert("Ground coffee dispenser is empty");
    }
    document.getElementById("coffee_level_value").textContent = grCoffee;
}

function addMilk() {
    if (milk < 95) {
        milk += 5;
    } else {
        alert("Cannot add more than 95% milk");
    }

    document.getElementById("milk_level_value").textContent = milk;
}

function removeMilk() {
    if (milk > 0) {
        milk -= 5;
    } else {
        alert("Cannot remove more milk");
    }
    document.getElementById("milk_level_value").textContent = milk;
}

function addSugar() {
    if (sugar < 10) {
        sugar ++;
    } else {
        alert("Stay healthy! Do not add more sugar");
    }

    document.getElementById("sugar_level_value").textContent = sugar;
}

function removeSugar() {
    if (sugar > 0) {
        sugar --;
    } else {
        alert("Cannot remove more sugar");
    }
    document.getElementById("sugar_level_value").textContent = sugar;
}


// function to prepare coffee. 
// No coffee will be prepared if the user did not add enough water or coffee

function makeCoffee() {
    if ( water > 0 && grCoffee > 0 ) {
        water -= 50;
        grCoffee -= 10;
        milk = 0;
        sugar = 0;

        document.getElementById("water_level_value").textContent = water;
        document.getElementById("coffee_level_value").textContent = grCoffee;
        document.getElementById("milk_level_value").textContent = milk;
        document.getElementById("sugar_level_value").textContent = sugar;

        alert("Your coffee is ready!")
    } else {
        alert("Not enough ingredients to make coffee")
    }

}






