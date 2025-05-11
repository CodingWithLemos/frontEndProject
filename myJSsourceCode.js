function addWater() {
    let water = document.getElementById("water_qty").innerHTML;
    water = parseInt(water);
    water++;
}

function removeWater() {
    let water = document.getElementById("water_qty").innerHTML;
    water = parseInt(water);

    if (water <= 0) {
        alert("You cannot remove more water!");
        return 0;
    }

    water--;
}

function addGroundCoffee() {
    let grCoffee = document.getElementById("coffee_qty").innerHTML;
    grCoffee = parseInt(grCoffee);
    grCoffee++;
}

function removeGroundCoffee() {
    let grCoffee = document.getElementById("coffee_qty").innerHTML;
    grCoffee = parseInt(grCoffee);

    if (grCoffee <= 0) {
        alert("You cannot remove more coffee!");
        return 0;
    }

    grCoffee--;
}

function addSugar() {
    let sugar = document.getElementById("sugar_qty").innerHTML;
    sugar = parseInt(sugar);
    sugar++;
}

function removeSugar() {
    let sugar = document.getElementById("sugar_qty").innerHTML;
    sugar = parseInt(sugar);

    if (sugar <= 0) {
        alert("You cannot remove more sugar!");
        return 0;
    }

    sugar--;
}

function addMilk() {
    let milk = document.getElementById("milk_qty").innerHTML;
    milk = parseInt(milk);
    milk++;
}

function removeMilk() {
    let milk = document.getElementById("milk_qty").innerHTML;
    milk = parseInt(milk);

    if (milk <= 0) {
        alert("You cannot remove more milk!");
        return 0;
    }

    milk--;
}