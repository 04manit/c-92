function addUser(){
    var player1 = document.getElementById("player_1_name").value;
    var player2 = document.getElementById("player_2_name").value;

    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);
    window.location = "game_page.html";
}