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