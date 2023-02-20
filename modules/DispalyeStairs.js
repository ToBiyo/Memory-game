import { Card } from "./modules/card.js";


export const DisplayPairs = (target, arr) =>{

    

    cards.forEach(el =>{

        let card = new Card(el.src, el.name);
    
        target.appendChild(card.renderCard());
    
    
    })

}