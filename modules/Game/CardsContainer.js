
import { Card } from "../card.js";

export const cardsContainer = (arr) =>{

    const cardsContainer = document.createElement('div');
    cardsContainer.id = 'cards_box';
    arr.forEach(el =>{
        const card = new Card(el.src, el.name);
        cardsContainer.appendChild(card.renderGameCard());
    })

    return cardsContainer;
}