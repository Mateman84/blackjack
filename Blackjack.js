document.getElementById("submitBtn").onclick(gameStart());

function gameStart() {
    playerOne = new Player();
    console.log("Funkar det?")
    playerOne.name = document.getElementById("nameCatcher").value;
    console.log("Name of the player is: " + playerOne.name);
}