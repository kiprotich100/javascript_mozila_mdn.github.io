const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert ("Awww, but chocolate is my favorite")
}


// functions in javascript 
let myVariable = document.querySelector("h1");

alert("hello!")

//defining your own functions

function multipy(num1,num2) {
    let result = num1 * num2;
    return result;
}

// Events
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!, Have you not have other jobs to do");
    //writing functions without names --> anonymous functions

});

// other ways of calling anonymous functions
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop Poking me!")
})