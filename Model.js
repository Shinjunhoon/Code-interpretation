class RacingData{
    constructor(carNames, tryCount){
        this.cars = carNames.map((name) => ({name, distance : 0}));
        this.tryCount = tryCount;
    }

    getCars(){
        return this.cars;
    } 

    getTryCount(){
        return this.tryCount;
    }
}
export default RacingData;