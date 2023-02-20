import { pairsRandomOrder } from "../logic/PirsRandomOrder.js";
import { generatePairs } from "../utility/generateCards.js";
import { cardsContainer } from "./CardsContainer.js";
import { gameplay } from "../logic/gameplay.js";
import { helpRules } from "../utility/helpRules.js";

export const gameUI = () =>{
    
    let cards = generatePairs();

    //main container section
    const gameRoot = document.createElement('div');
    gameRoot.id = 'game_box';
    //GameUI section
    const GameUI = document.createElement('div');
    GameUI.classList ='game-utilities';
    const backHome = document.createElement('input');
    backHome.setAttribute('type', 'submit');
    backHome.setAttribute('value', 'Home');
    backHome.id = 'home_btn';
    backHome.classList = 'GUI_btn';
    const scoreBox = document.createElement('div');
    scoreBox.classList = "score_box";
    const scoreOutput = document.createElement('h3');
    scoreOutput.innerText = `SCORE : 0`;
    scoreOutput.classList = 'score_text';
    const restartBtn = document.createElement('button');
    restartBtn.id = 'restart_btn';
    restartBtn.innerText = 'Restart';
    restartBtn.classList = 'GUI_btn';
    

    const rulesReminder = document.createElement('button');
    rulesReminder.innerText = '?';
    rulesReminder.id = 'rules_btn';

    scoreBox.appendChild(scoreOutput)
    GameUI.appendChild(backHome);
    GameUI.appendChild(restartBtn);
    GameUI.appendChild(scoreBox);
    GameUI.appendChild(rulesReminder);

    //pairs card container
   
    let cardsBox = cardsContainer(pairsRandomOrder(cards));
    

    
   
    gameRoot.appendChild(GameUI);
    gameRoot.appendChild(cardsBox);

    let isRestarted = false;

    gameRoot.addEventListener('click', (e) =>{
        let target = e.target;
        

        if(target.id === 'restart_btn'){
            isRestarted = true;
            const oldBox = document.getElementById('cards_box');
            let newcards = pairsRandomOrder(generatePairs())
            cardsBox = cardsContainer(newcards);
            scoreOutput.innerHTML = '<h3>SCORE : 0</h3>';
            gameRoot.replaceChild(cardsBox, oldBox);
            
        }

        if(target.className === "back_card"){
           console.log(isRestarted);
            gameplay(e,scoreOutput, isRestarted);
            isRestarted = false;

        }
        if(target.id === 'rules_btn'){

            gameRoot.appendChild(helpRules(gameRoot));


        }


    });

    

    

    

    return gameRoot;

}