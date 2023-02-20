import { Pairs } from "../pairs.js";

export const generatePairs = () =>{
    return  [
        new Pairs("cat", '../assets/cat.png'),
        new Pairs("delphin", '../assets/delphin.png'),
        new Pairs("dog", '../assets/dog.jpeg'),
        new Pairs("eagle", '../assets/eagle.avif'),
        new Pairs("goldfish", '../assets/goldfish.jpg'),
        new Pairs("tiger", '../assets/tiger.avif'),
        new Pairs("lion", '../assets/lion.jpg'),
        new Pairs("pig", '../assets/pig.jpg')
    ];
}