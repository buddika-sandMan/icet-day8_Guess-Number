function btnGussNumber() {
    let number = document.getElementById("txtNumber").value;
    
    let ranNum = Math.floor(Math.random() *10) +1;
    
    if(number < 11 && number==ranNum){
        alert("You guessed correct number!\nyour number"+number+"\nSystem generated "+ranNum);
    } else {
        alert("You lose!\nyour number"+number+"\nSystem generated "+ranNum);
    }

}