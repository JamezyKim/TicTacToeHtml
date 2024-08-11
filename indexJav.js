function loginCheck(){

    event.preventDefault();
    
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    
    let userNames = ["James","Aiden", "Ethan", "Nathan", "Jaiden", "William", "Jamez"];
    let passwords = ["123","234","345","456","678", "999", "888"];

    let isMatched = false;

    for (let i=0;userNames.length>i;i++){
        if (userNames[i] == userName && passwords[i] == password){
            debugger;
            console.log("good");
            isMatched = true;
            break;
        }
    }
    if(isMatched == true){
        window.location="http://127.0.0.1:5500/tictactoe/tictactoe.html";
    }
}

