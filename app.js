
import { Homepage } from "./modules/Home/Homepage.js";
import { gameUI } from "./modules/Game/GameUI.js";
import { generatePairs } from "./modules/utility/generateCards.js";


const pairGame = () =>{

    let cards = generatePairs();
    const root = document.getElementById('root');
    const home = Homepage(cards, root)
   
    root.appendChild(home)
    
        
        root.addEventListener('click', (e) =>{

        let target = e.target;
        
        if(target.id === 'start_btn'){
            const game = gameUI(cards);
            root.replaceChild(game, root.firstElementChild);
            
        }else if(target.id === "home_btn"){
            root.innerHTML = "";
            cards = generatePairs();
            root.appendChild(Homepage(cards));
        }});  

}



pairGame();




