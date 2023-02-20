
const gameData = {
    click : 0,
    firstCard : "",
    lastCard : "",
    firstClick : "",
    lastClick : "",
    score :  0
}

export const gameplay = (e, anchor, condition) =>{

    gameData.score = condition ?  0 : gameData.score;

    let target = e.target;
    gameData.click++;
    let imgSrc = target.parentElement.firstElementChild.firstElementChild.src;

   
    
    if(e.target.className === 'back_card'){
        
        target.parentElement.classList.add('rotate');

        if(gameData.click % 2){
            gameData.firstClick = target;
            gameData.firstCard = imgSrc;

    
        }else{
            gameData.lastClick = target;
            gameData.lastCard = imgSrc;
            
            if(gameData.firstCard === gameData.lastCard){
               
                gameData.score += 150;

            }else{
                gameData.score -= 50;
                setTimeout(()=>{
                    gameData.firstClick.parentElement.classList.remove('rotate');
                    gameData.lastClick.parentElement.classList.remove('rotate');
                }, 500)
                
            }
    
        }

        anchor.innerHTML = `<h3>SCORE :  ${gameData.score}</h3>`;
    }
}