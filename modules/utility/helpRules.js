 import { gameRules } from "./gameRules.js";

 export const helpRules = (parent)=> {

    const overlay = document.createElement('div');
    overlay.classList = 'rules_overlay';
    const rulesBox = document.createElement('div');
    rulesBox.classList = "rules_help";
    const rulesHeading = document.createElement('h3')
    rulesHeading. innerText = 'Game rules';
    const rulesList = document.createElement('ul');
    rulesList.innerHTML = gameRules();
    const exitBtn = document.createElement('button');
    exitBtn.innerText = "Exit";

    rulesBox.appendChild(rulesHeading);
    rulesBox.appendChild(rulesList);
    rulesBox.appendChild(exitBtn);
    overlay.appendChild(rulesBox);
    exitBtn.addEventListener('click', () =>{
        parent.removeChild(overlay);
    })

    return overlay;
 }