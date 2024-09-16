import { Console } from "@woowacourse/mission-utils";

class View{

async getCarNames(){
    const CarInput = await Console.readLineAsync("경주할 자동차 이름 입력");
    const CarNames = carInput.slpit(",").map((Car) => Car.trim());
    return CarNames;
}

async getTryCount(){
    const countInput = await Console.readLineAsync("횟수 입력");
    return parseInt(countInput);
}

 printRaceResult(cars){
    cars.forEach((cars) =>{
        Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });
    console.print("")
 }
 printwinner(winnerCar){
    Console.print(`최종 우승자는 :${winnerCar}`);
 }
}
export default View;





