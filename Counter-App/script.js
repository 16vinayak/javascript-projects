let appear_value = document.body.querySelector(".count")
let incrase_count2 = document.body.querySelector(".increment")
let decrase_count2 = document.body.querySelector(".decrement")
let reset = document.body.querySelector(".reset")


let n = 0;
function updateCounter() {
    appear_value.textContent = n;
    if (n == 0) {
        appear_value.style.color = "white"
    }
    else if (n < 0) {
        appear_value.style.color = "red"
    }
    else {
        appear_value.style.color = "green"
    }
}
function increase_count() {
    if (n == 100) {
        alert("Maximum reached")
    }
    else {
        n++;
        updateCounter()
    }
}
function decrease_count() {
    if (n == -100) {
        alert("Minimum reached")
    }
    else {
        n--;
        updateCounter()
    }
}

function reset_zero() {
    n = 0;
    updateCounter()
}

// Add the event listener to the document
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the spacebar
    if (event.key === ' ' || event.code === 'Space') {
        reset_zero();
    }
    if (event.key === "ArrowDown") {
    // Optional: Prevent default browser behavior like page scrolling
    event.preventDefault(); 
    decrease_count();
    }
    if (event.key === 'ArrowUp') {
        // Prevent default browser behavior like scrolling up
        event.preventDefault(); 
        
        // Call your custom function here
        increase_count(); 
    }

});

incrase_count2.addEventListener("click", increase_count) 
decrase_count2.addEventListener("click", decrease_count) 
reset.addEventListener("click", reset_zero)
