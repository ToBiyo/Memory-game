
 export class Card {

    constructor(src, name, pairclass, imgclass){
        this.src = src;
        this.name = name;
        this.pairclass = pairclass;
        this.imgclass = imgclass;
    }

    renderCard(){

        const cardBox = document.createElement('div');
        cardBox.classList = 'home-card';
        const cardImg = document.createElement('img');
        cardImg.classList = 'pair-img';
        cardImg.src = this.src;
        cardBox.appendChild(cardImg);
        return cardBox;
    }

    renderGameCard () {

        const cardBox= document.createElement('div');
        cardBox.classList = 'card-box'
        const card = document.createElement('div');
        card.classList = 'the_card';
        const frontCard = document.createElement('div');
        frontCard.classList = 'front_card';
        const cardImg = document.createElement('img');
        cardImg.classList = 'pair-img';
        cardImg.src = this.src;
        const backCard = document.createElement('div');
        backCard.classList = 'back_card';

        frontCard.appendChild(cardImg);
        card.appendChild(frontCard);
        card.appendChild(backCard);
        cardBox.appendChild(card);

       
        return cardBox;

    }
}