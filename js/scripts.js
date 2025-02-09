// get references to elements
const studentIdElement = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");

// array of image filenames
const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// function to change background color based on user input
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    let color = "white";

    if (number < 0 || number > 100) color = "red";
    else if (number <= 20) color = "green";
    else if (number <= 40) color = "blue";
    else if (number <= 60) color = "orange";
    else if (number <= 80) color = "purple";
    else color = "yellow";

    document.body.style.backgroundColor = color;
}

// function to change background color randomly
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 101);
    customNumberInput.value = randomNum; 
    changeCustomColor(); 
}

// function to populate the select list with image options
function addList() {
    if (imageSelect.children.length <= 1) { 
        imageArray.forEach(img => {
            const option = document.createElement("option");
            option.value = img;
            option.textContent = img;
            imageSelect.appendChild(option);
        });
    }
}

// function to change the image source
function changeImage() {
    const selectedImage = imageSelect.value;
    if (selectedImage) {
        images.src = `img/${selectedImage}`;
    }
}

// add event listeners
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

document.addEventListener("DOMContentLoaded", addList); 