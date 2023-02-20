import { getRandom } from "../utility/getRandom.js";

export const pairsRandomOrder = (el) =>{
    let arr = el;
    let definitiveCards = [];

    while(arr.length > 0){
        let randomIndex = getRandom(arr.length);
        if(definitiveCards.includes(arr[randomIndex])){
            definitiveCards.push(arr[randomIndex]);
            arr.splice(randomIndex, 1);

        }else{
            definitiveCards.push(arr[randomIndex]);
        }

    }

    return definitiveCards;
}
