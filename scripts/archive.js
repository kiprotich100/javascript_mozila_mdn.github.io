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
 // mdn intro to js mdn tutorial
 
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/learn_js.jpeg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

// Adding a personalized welcome page 

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Please enter your name.");//prompt displays a dialog box
    if (!myName) {
        setUsername();
    } else {
    localStorage.setItem("name", myName);
    //localStorage is an API which give storage
    //setItem creates and and store a data item as name, setting its value to the myName 
    myHeading.textContent = `Mozila is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUsername()
}