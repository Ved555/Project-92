var player1 = localStorage.getItem("player1-name");
var player2 = localStorage.getItem("player2-name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1name").innerHTML = player1 + " : -";
document.getElementById("player_2name").innerHTML = player2 + " : -";

document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;

document.getElementById("player_que").innerHTML = "Question Turn : " + player1 ;
document.getElementById("player_ans").innerHTML = "Answer Turn : " + player2 ;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    Q =  "<h3>" + number1 + " X " + number2 + "</h3>";
    A =  "	<br> ans: <input type='text' id='input_check_box'>	";
    check_button = "<br> <button class='btn btn-success' onclick='check()'>check</button>";
    row = Q + A + check_button; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
function check(){
    question_turn = "player_1name";
    answer_turn = "player_2name";
    ans = document.getElementById("input_check_box").value;
    if(ans == actual_answer){
        if(answer_turn == "player_1name"){
            player1_score += 1;
            document.getElementById("p1score").innerHTML = player1_score;
        }else{
            player2_score += 1;
            document.getElementById("p2score").innerHTML = player2_score;
        }
    }
    if(ans != actual_answer){
        if(answer_turn == "player_1name"){
            player1_score -= 1;
            document.getElementById("p1score").innerHTML = player1_score;
        }else{
            player2_score -= 1;
            document.getElementById("p2score").innerHTML = player2_score;
        }
    }
    if(answer_turn == "player_1name"){
        answer_turn = "player_2name";
        document.getElementById("player_que").innerHTML = "Question Turn : " + player2;
    }else{
        answer_turn = "player_1name";
        document.getElementById("player_que").innerHTML = "Question Turn : " + player1;
    }
    if(question_turn == "player_1name"){
        question_turn = "player_2name";
        document.getElementById("player_ans").innerHTML = "Answer Turn : " + player2;
    }else{
        question_turn = "player_1name";
        document.getElementById("player_ans").innerHTML = "Answer Turn : " + player1;
    }
    document.getElementById("output").innerHTML = "";

}
