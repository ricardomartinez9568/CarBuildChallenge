export interface newCar{
    incomingDoors: any,
    incomingModel: any,
    incomingColor: string,
    incomingMPG: any,
}
 
 export class Car {
    doors: any;
    model: any;
    color: string;
    MPG: any;
 
    constructor(labelledObj: newCar) {
       this.color = labelledObj.incomingColor;
       this.model = labelledObj.incomingModel;
       this.doors = labelledObj.incomingDoors;
       this.MPG = labelledObj.incomingMPG
    }
 }