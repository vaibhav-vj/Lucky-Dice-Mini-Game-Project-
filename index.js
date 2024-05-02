var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1-6 
var randomImage = "images/" + "dice" + randomNumber1 + ".png"; //Path
var image1 = document.querySelectorAll("img")[0];  // the image 0 is img first 
image1.setAttribute("src" , randomImage); //That Path is used here
//image1 now changes accoding to its sourse 
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "images/" + "dice" + randomNumber2 + ".png"; //2nd random number generated
var image2 = document.querySelectorAll("img")[1]; // This select second image 
image2.setAttribute("src" , randomImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins 🏆";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins 🏆";
} else {
    document.querySelector("h1").textContent = "Draw! 📍";
}
