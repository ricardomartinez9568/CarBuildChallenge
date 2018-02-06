"use strict";
exports.__esModule = true;
var Vehicle = require("./carbuild");
document.getElementById("submit").onclick = function () { newCar(); };
function newCar() {
    var color = document.getElementById("color").value;
    var model = document.getElementById("model").value;
    var doors = document.getElementById("doors").value;
    var mpg = document.getElementById("MPG").value;
    var carObject = {
        incomingColors: color,
        incomingModel: model,
        incomingDoors: doors,
        incomingMPG: mpg
    };
    var myCar = new Vehicle.Car(carObject);
    console.log(myCar);
}
