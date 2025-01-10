var randomNumber1 = randomNum();

var randomNumber2 = randomNum();

dice1(randomNumber1);

dice2(randomNumber2);

winner(randomNumber1, randomNumber2);

function dice1(randomNumber1){

    if(randomNumber1 === 1){
         document.querySelector(".img1").srcset = "./images/dice1.png";
    }else if(randomNumber1 === 2){
        document.querySelector(".img1").srcset = "./images/dice2.png";
    }else if(randomNumber1 === 3){
        document.querySelector(".img1").srcset = "./images/dice3.png";
    }else if(randomNumber1 === 4){
        document.querySelector(".img1").srcset = "./images/dice4.png";
    }else if(randomNumber1 === 5){
        document.querySelector(".img1").srcset = "./images/dice5.png";
    }else if(randomNumber1 === 6){
        document.querySelector(".img1").srcset = "./images/dice6.png";
    }else{
        console.log("oops");
    }

}

function dice2(randomNumber1){

    if(randomNumber1 === 1){
         document.querySelector(".img2").srcset = "./images/dice1.png";
    }else if(randomNumber1 === 2){
        document.querySelector(".img2").srcset = "./images/dice2.png";
    }else if(randomNumber1 === 3){
        document.querySelector(".img2").srcset = "./images/dice3.png";
    }else if(randomNumber1 === 4){
        document.querySelector(".img2").srcset = "./images/dice4.png";
    }else if(randomNumber1 === 5){
        document.querySelector(".img2").srcset = "./images/dice5.png";
    }else if(randomNumber1 === 6){
        document.querySelector(".img2").srcset = "./images/dice6.png";
    }else{
        console.log("oops");
    }

}

function winner(randomNumber1, randomNumber2){

    if(randomNumber1 > randomNumber2){
        document.querySelector(".container").firstElementChild.textContent = "Player 1 wins!";
    }else if(randomNumber1 < randomNumber2){
        document.querySelector(".container").firstElementChild.textContent = "Player 2 wins!";
    }else{
        document.querySelector(".container").firstElementChild.textContent = "Draw!";
    }

}

function randomNum(){
    return Math.floor(Math.random() * 6) + 1;
}

