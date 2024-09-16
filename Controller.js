import RacingData from "./Model.js"
import View from "./View.js"
import {Random} from "@woowacourse/mission-utils";

class Controller{
constructor(){
    this.view = new View();
    this. racingData = null;
}

async start(){
    const carNames = await this.view.getCarNames();
    const tryCount = await this.view.tryCount();
    this.racingData = new RacingData(carNames,tryCount);
for(let i = 0; i<tryCount; i++){
    this.moveCars();
    this.view.printRaceResult(this.racingData.getCars());
}
const winnerCar = this.racingWinner();
this.view.printwinner(winnerCar);

}

moveCars(){
    this.racingData.getCars().forEach((car)=>{
        const randomNumber = Random.pickNumberInRange(0,9);
        if(randomNumber >=4){
            car.distance +=1;
        }
    });
    
}
racingWinner(){
    let winnerMove = 0;
    this.racingData.getCars().forEach((car)=>{
        if(car.distance > winnerMove){
            winnerMove = car.distance;
        }
    });
    const winner = this.racingData.getCars().fillier((car)=> car.distance == winnerMove).map((car)=> car.name);
    return winner
}
}

export default Controller;