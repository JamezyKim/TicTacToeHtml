function changeColor(element){

    let player = document.getElementById('turn').innerHTML;


    if(element.style.backgroundColor != '') {
        alert("it is already clicked");
        return;
    }

    if (player == 'Player1'){
        element.style.backgroundColor = 'red';
        player = 'Player2';
    }

    else if(player == 'Player2'){
        element.style.backgroundColor = 'blue';
        player = 'Player1';
    }
    winCheck();
    

    document.getElementById('turn').innerHTML = player;
}

function reset(){
    let numberOfContent = document.getElementsByClassName('content').length;
    while(numberOfContent>0){
        document.getElementsByClassName('content')[numberOfContent-1].style.backgroundColor = '';
        numberOfContent -= 1;
    }
    document.getElementById('turn').innerHTML = 'Player1'
}

function winCheck(){
    let numberOfContent = document.getElementsByClassName('content').length;
    let contents = [];
    let winCases = ['012','345','678','036','147','369','048','246'];
    let redCases = [];
    let blueCases = [];
    let counter = 0;
    while (counter < numberOfContent){
        let tag = document.getElementsByClassName('content')[counter];

        if ( tag.style.backgroundColor == 'blue'){
            contents[counter] = 'blue';
        }
        else if(tag.style.backgroundColor == 'red'){
            contents[counter] = 'red';
        }
        else{
            contents[counter] = '';
        }
        counter +=1;
    }
    
    for (let i=0;i<contents.length; i++){
        if (contents[i] == 'blue'){
            blueCases += String(i);
        }
        else if(contents[i] == 'red'){
            redCases += String(i);
        }    
    }
    counter = 0;
    while (counter<winCases.length){
        if (redCases.includes(winCases[counter])){
            alert("red won");
        }
        else if(blueCases.includes(winCases[counter])){
            alert("blue won");
        }

        else if(redCases.length > 4 && winCases[counter] != redCases && winCases[counter] != blueCases){
            alert("draw");
            redCases = '';
            blueCases = '';
            reset();
        }

        counter++;
    }
    console.log(redCases);
    console.log(blueCases);

}


