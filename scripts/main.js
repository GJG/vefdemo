//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

// queryselector

document.querySelector('html').addEventListener('click', function() {
        alert('ái þú ert að pota í mig! ');
});

let myVariable = "Bob";

var myVariable2 = "Bobby";

let myNum = 1;
myNum = myNum + 1;

let myBolean = true;
myBolean = !myBolean;

let myList = [2, 'jón', 10, 'Gunna'];
myList = myList[3];

/* samanburður */

let iceCream = "vanilla";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

/* skipta út mynd */

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/Firefox_brand_logo.svg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

/* bæta við texta í html */

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  };

