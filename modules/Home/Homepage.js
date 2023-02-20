import { getRandom } from "../utility/getRandom.js";
import { Card } from "../card.js";
import { gameRules } from "../utility/gameRules.js";

export const Homepage = (arr)=>{

    //create home container
    const home = document.createElement('home');
    home.id = "home-page";

    //home heading
    const heading = document.createElement('h1');
    heading.innerText = "Memory game";
    const cardContainer = document.createElement('div');

    //card section
    const cardData = arr[getRandom(arr.length)];
    cardContainer.classList = 'card-container';
    const card = new Card(cardData.src, cardData.name);
    cardContainer.appendChild(card.renderCard());
    cardContainer.appendChild(card.renderCard());

    //rule container
    const ruleContainer = document.createElement('div');
    ruleContainer.classList = 'rule-container';
    const ruleHeading = document.createElement('h2');
    ruleHeading.innerText = 'Game rules';
    const ruleList = document.createElement('ul');
    ruleList.classList = "rule_list";
    ruleList.innerHTML = gameRules();
    ruleContainer.appendChild(ruleHeading);
    ruleContainer.appendChild(ruleList);

    //start game button
    const startBtn = document.createElement('button');
    startBtn.innerText = "Start"
    startBtn.id = 'start_btn';
    
    //append home elements
    home.appendChild(heading);
    home.appendChild(cardContainer);
    home.appendChild(ruleContainer);
    home.appendChild(startBtn);


    return home;
}