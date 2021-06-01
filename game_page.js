console.log("came");
player_1_name = localStorage.getItem("Player 1");
player_2_name = localStorage.getItem("Player 2");
player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_name_game").innerHTML = player_1_name+" : ";
document.getElementById("player_2_name_game").innerHTML = player_2_name+" : ";
document.getElementById("score_player_1_game").innerHTML = player_1_score;
document.getElementById("score_player_2_game").innerHTML = player_2_score;
document.getElementById("question_turn").innerHTML = player_1_name;
document.getElementById("answer_turn").innerHTML = player_2_name;
question_turn = "Player 1";
answer_turn = "Player 2";
function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase : "+word);

    charAt1 = word.charAt(1);
    console.log(charAt1);
    length = Math.floor(word.length/2);

    charAt2 = word.charAt(length);
    console.log(charAt2);
    length_minus_1 = word.length-1;

    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    word_backup = word;
    console.log(word_backup);
    word_backup = word_backup.replace(charAt1, "_");
    word_backup = word_backup.replace(charAt2, "_");
    word_backup = word_backup.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> Question. "+word_backup+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in lower case - "+answer);

    if(answer == word){
        if(answer_turn == "Player 1"){
            player_1_score = player_1_score + 1;
            document.getElementById("score_player_1_game").innerHTML = player_1_score;
        }else{
            player_2_score = player_2_score + 1;
            document.getElementById("score_player_2_game").innerHTML = player_2_score;
        }
    }
    if(question_turn == "Player 1"){
        question_turn = "Player 2";
        document.getElementById("question_turn").innerHTML = player_2_name;
    }else{
        question_turn = "Player 1";
        document.getElementById("question_turn").innerHTML = player_1_name;
    }

    if(answer_turn == "Player 1"){
        answer_turn = "Player 2";
        document.getElementById("answer_turn").innerHTML = player_2_name;
    }else{
        answer_turn = "Player 1";
        document.getElementById("answer_turn").innerHTML = player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}