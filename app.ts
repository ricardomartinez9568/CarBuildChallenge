import * as Vehicle from "./carbuild"

(<HTMLInputElement>document.getElementById("submit")).onclick = function() { newCar() };

function newCar(){
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    let model = (<HTMLInputElement>document.getElementById("model")).value;
    let doors = (<HTMLInputElement>document.getElementById("doors")).value;
    let mpg = (<HTMLInputElement>document.getElementById("MPG")).value; 

    let carObject = {
        incomingColor: color,
        incomingModel: model,
        incomingDoors: doors,
        incomingMPG: mpg
    }

    let myCar = new Vehicle.Car(carObject)

    console.log(myCar)
}