/*CARDS*/

const cardColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards]; //18 divs
const startTime = new Date().getTime();
let activeCard="";
const activeCards=[];
const gamePairs = cards.length/2;
let gameResult=0;
//console.log(startTime)
const clickCard = function() {
     activeCard = this;
    if (activeCard==activeCards[0]) return;
    /*console.log("click")*/       
    activeCard.classList.remove("hidden");
//czy bylo 1 klikniecie
    if(activeCards.length === 0) {
        activeCards[0] = activeCard;
        console.log("1");
        return;
    }
//czy to 2 klikniecie
    else {   console.log("2");
        cards.forEach(card =>card.removeEventListener("click", clickCard)) 
        activeCards[1] = activeCard;
        setTimeout(function() {
            if (activeCards[0].className === activeCards[1].className) {
                console.log("wygrana")
                activeCards.forEach(card=> card.classList.add("off")) 
                gameResult++;
                cards = cards.filter(card=>!card.classList.contains("off"))
                if (gameResult == gamePairs) {
                 //console.log("Wygrana gra!")
                    const endTime = new Date().getTime();
                    const gameTime =(endTime-startTime)/1000;
                    alert (`Udało się! Twój wynik to: ${gameTime} sekund`)
                    location.reload();
                }
            }
            else {
                console.log("przegrana")
                activeCards.forEach(card=> card.classList.add("hidden"))
            }
            activeCard="";
            activeCards.length =0;
            cards.forEach(card => card.addEventListener("click", clickCard))
        }, 1000)
     
    }

};

const init = function () {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardColors.length);
        card.classList.add(cardColors[position]);
        cardColors.splice(position, 1); //splice - remove arrays's elements
    })
    setTimeout(function () {
        cards.forEach(function (card) {
          card.classList.add("hidden")
          card.addEventListener("click",clickCard)
        })
    }, 2000)
    
};

init()

    
